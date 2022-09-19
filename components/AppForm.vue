<template>
  <div>
    <form
      class="form p-6 mx-3 sm:mx-auto max-w-2xl rounded-md my-12"
      @submit.prevent="nextOrSend"
      id="borrow-form"
      name="submit-to-google-sheet"
    >
      <div :is="`slide${currentSlide}`"></div>
      <div class="flex items-center justify-between mt-10">
        <button
          type="button"
          @click="previousSlide"
          class="opacity-75 focus:outline-none py-2"
        >
          Back
        </button>
        <submitBtn
          :text="btnText"
          :success="requestSuccess"
          @reset-state="requestSuccess = $event"
        />
        <strong class="opacity-75"
          >Step {{ currentSlide }} of {{ totalSlides }}</strong
        >
      </div>
    </form>
    <Modal
      v-if="showModal"
      @close="showModal = false"
      title="Please fill the entire form."
      status="warning"
    />
  </div>
</template>

<script>
const slide1 = () => import("@/components/FormSlide1");
const slide2 = () => import("@/components/FormSlide2");
const slide3 = () => import("@/components/FormSlide3");
const slide4 = () => import("@/components/FormSlide4");
const slide5 = () => import("@/components/FormSlide5");
const slide6 = () => import("@/components/FormSlide6");
const slide7 = () => import("@/components/FormSlide7");
const slide8 = () => import("@/components/FormSlide8");
const submitBtn = () => import("@/components/SubmitButton");
import AWS from "aws-sdk";
import formToGoogleSheet from "@/mixins/formToGoogleSheet";

export default {
  components: {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    submitBtn,
    Modal: () => import("@/components/Modal"),
  },

  data() {
    return {
      currentSlide: 1,
      requestSuccess: -1,
      showModal: false,
      totalSlides: 8,
    };
  },

  methods: {
    previousSlide() {
      if (this.currentSlide > 1) this.currentSlide--;
    },
    nextOrSend() {
      if (this.currentSlide < this.totalSlides) return this.currentSlide++;
      let formContentOrig = {
        name: this.$store.state.form.name,
        email: this.$store.state.form.email,
        location: this.$store.state.form.location,
        propertyType: this.$store.state.form.propertyType,
        fundingUsedFor: this.$store.state.form.fundingUsedFor,
        ownershipStatus: this.$store.state.form.ownershipStatus,
        purchasePrice: this.$store.state.form.purchasePrice,
        currentMarketValue: this.$store.state.form.currentMarketValue,
        outstandingDebt: this.$store.state.form.outstandingDebt,
        totalProjectCosts: this.$store.state.form.totalProjectCosts,
        anticipatedGDV: this.$store.state.form.anticipatedGDV,
        borrowAmount: this.$store.state.form.borrowAmount,
        projectDuration: this.$store.state.form.projectDuration,
        exitStrategy: this.$store.state.form.exitStrategy,
        howHeard: this.$store.state.form.howHeard,
      };

      let formContent = JSON.parse(JSON.stringify(formContentOrig));

      formContent.totalProjectCosts.value = `&pound;${formContent.totalProjectCosts.value}`;
      formContent.anticipatedGDV.value = `&pound;${formContent.anticipatedGDV.value}`;
      formContent.borrowAmount.value = `&pound;${formContent.borrowAmount.value}`;
      formContent.projectDuration.value = `${formContent.projectDuration.value} months`;

      if (this.$store.state.form.ownershipStatus.value == "I'm buying it") {
        delete formContent.currentMarketValue;
        delete formContent.outstandingDebt;
        delete formContentOrig.currentMarketValue;
        delete formContentOrig.outstandingDebt;
        formContent.purchasePrice.value = `&pound;${formContent.purchasePrice.value}`;
      } else {
        delete formContent.purchasePrice;
        delete formContentOrig.purchasePrice;
        formContent.currentMarketValue.value = `&pound;${formContent.currentMarketValue.value}`;
        formContent.outstandingDebt.value = `&pound;${formContent.outstandingDebt.value}`;
      }

      var formFilled = false;
      for (let e of Object.values(formContentOrig))
        if (e.value == "") {
          formFilled = false;
          break;
        } else formFilled = true;

      if (!formFilled) return (this.showModal = true);
      if (this.requestSuccess !== -1) return;

      // 2 is for loading
      this.requestSuccess = 2;

      formContent = Object.values(formContent)
        .map((e) => `<p>${e.label}: <strong>${e.value}</strong></p>`)
        .join("");

      const SESConfig = {
        apiVersion: "2010-12-01",
        accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
        region: process.env.AWS_SES_REGION,
      };

      var params = {
        Destination: {
          ToAddresses: ["anything@uown.co"],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `<div style='font-size: 15px; color: #555'>${formContent}</div>`,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "UOWN Borrower Form Submission",
          },
        },
        Source: "sam@uown.co",
      };

      var sendPromise = new AWS.SES(SESConfig).sendEmail(params).promise();

      sendPromise
        .then((data) => {
          // console.log(data.MessageId);
          this.requestSuccess = 1;
          this.$store.commit("form/resetValues");
          this.currentSlide = 1;
        })
        .catch((err) => {
          this.requestSuccess = 0;
          console.error(err, err.stack);
        });

      this.formToGoogleSheet(
        "https://script.google.com/a/macros/uown.co/s/AKfycbzTeylxxDc4BwXSpTigHAPQ2rJuBK9tGGCPilQs6Qc5oHmAmfQpOC5faQ/exec",
        "submit-to-google-sheet"
      );
    },
  },

  mixins: [formToGoogleSheet],

  computed: {
    btnText() {
      return this.currentSlide < this.totalSlides ? "Next" : "Submit";
    },
  },
};
</script>

<style scoped>
.form {
  box-shadow: 0 0 22px 0 rgba(54, 52, 43, 0.12);
}
</style>