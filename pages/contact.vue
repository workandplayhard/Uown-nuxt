<template>
  <layout title="Contact">
    <p class="text-2xl opacity-50 max-w-sm mx-auto text-center">
      Our team is on hand to answer any questions you may have.
    </p>
    <form
      class="form max-w-3xl mx-auto grid gap-x-6 gap-y-8 sm:grid-cols-2 mt-16"
      @submit.prevent="sendEmail"
      id="contact-form"
      name="submit-to-google-sheet"
    >
      <AppInput name="Name" id="name" placeholder="Enter name" v-model="name" />
      <AppInput
        name="Email Address"
        id="email"
        placeholder="Enter email"
        type="email"
        v-model="email"
      />
      <AppInput
        name="Message"
        id="message"
        placeholder="Enter message"
        textarea
        class="message"
        v-model="message"
      />
      <submitBtn
        :success="requestSuccess"
        @reset-state="requestSuccess = $event"
      />
    </form>
  </layout>
</template>

<script>
const layout = () => import("@/components/ContactComplaintsLayout");
const AppInput = () => import("@/components/AppInput");
const btnRounded = () => import("@/components/BtnRounded");
const submitBtn = () => import("@/components/SubmitButton");
import AWS from "aws-sdk";
import formToGoogleSheet from "@/mixins/formToGoogleSheet";
import fullCanonicalURL from "@/mixins/fullCanonicalURL";

export default {
  components: {
    layout,
    AppInput,
    btnRounded,
    submitBtn,
  },

  head() {
    return {
      title: "Contact Us | Get in Touch",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Have a question about our property crowdfunding platform? Get in touch - we would love to help. Click to contact us now.",
        },
      ],
      link: [{ href: this.fullCanonicalURL, rel: "canonical" }],
    };
  },

  data() {
    return {
      name: "",
      email: "",
      message: "",
      requestSuccess: -1,
    };
  },

  methods: {
    sendEmail() {
      if (this.name && this.email && this.message) {
        // 2 is for loading
        this.requestSuccess = 2;

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
                Data: `
                    <h3 style='margin: 0 0 3px 0; color: #333'>${this.name}</h3>
                    <h3 style='margin: 0 0 25px 0; color: #333'>${this.email}</h3>
                    <pre style='font-size: 15px; color: #333; font-family: Arial, Helvetica, sans-serif'>${this.message}</pre>
                    `,
              },
            },
            Subject: {
              Charset: "UTF-8",
              Data: "UOWN Contact Form Submission",
            },
          },
          Source: "sam@uown.co",
          ReplyToAddresses: [this.email],
        };

        var sendPromise = new AWS.SES(SESConfig).sendEmail(params).promise();

        sendPromise
          .then((data) => {
            // console.log(data.MessageId);
            this.requestSuccess = 1;
            this.name = this.email = this.message = "";
          })
          .catch((err) => {
            this.requestSuccess = 0;
            console.error(err, err.stack);
          });
        this.formToGoogleSheet(
          "https://script.google.com/a/macros/uown.co/s/AKfycbx_mVg6tH6QuV2tbuh-MKLSfnyqH4S_H6qo8kiX5fEQd4LuD-ZHzwRc/exec",
          "submit-to-google-sheet"
        );
      }
    },
  },

  mixins: [formToGoogleSheet, fullCanonicalURL],
};
</script>

<style scoped>
.message {
  grid-column: 1/-1;
}

.form {
  justify-items: flex-start;
}
</style>