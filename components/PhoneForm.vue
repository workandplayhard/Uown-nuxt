<template>
  <form
    action=""
    class="form relative grid items-end"
    @submit.prevent="send"
    @keydown.esc="hideMenu"
  >
    <PhoneFormInputCode
      v-model="selected"
      @input-clicked="toggleMenu"
      :active="showMenu"
      v-click-outside="hideMenu"
    />
    <PhoneFormInputNumber v-model="number" class="mx-4" />
    <SubmitButton
      class="btn"
      text="Get Started"
      :success="requestSuccess"
      :disabled="btnDisabled"
      @reset-state="requestSuccess = $event"
    />
    <transition name="fade">
      <div
        v-show="showMenu"
        class="menu absolute left-0 right-0 cursor-pointer bg-white shadow-md rounded-md"
      >
        <div class="flex items-center mx-6 h-8 my-3">
          <label for="search"
            ><img
              src="@/assets/images/search.svg"
              alt=""
              class="w-4 h-4 mr-2 opacity-50"
          /></label>
          <input
            type="text"
            name=""
            id="search"
            v-model="query"
            class="outline-none w-full h-full"
            ref="searchInput"
          />
        </div>
        <ul class="list-container overflow-auto">
          <li
            v-for="e in computedList"
            :key="e.code"
            class="flex items-center py-3 px-6 hover:bg-light overflow-auto"
            @click="entryClicked(e)"
          >
            <AppImage
              :source="
                require(`@/assets/images/flags/${e.code.toLowerCase()}.png`)
              "
              :sourceWebp="
                require(`@/assets/images/flags/${e.code.toLowerCase()}.png?webp`)
              "
              imgClasses="w-8 h-8 mr-4"
            />
            <span class="flex-grow">{{ e.name }}</span>
            <span class="opacity-50 ml-2">{{ e.dialCode }}</span>
          </li>
        </ul>
      </div>
    </transition>
    <Modal
      v-if="showModal"
      :title="modalContent.title"
      :para="modalContent.para"
      :status="modalContent.status"
    >
      <div
        :class="{
          'flex space-x-6':
            modalContent.status === 'error' ||
            modalContent.status === 'warning',
        }"
      >
        <btn
          text="Done"
          notLink
          class="modal-btn w-full text-lg transform -translate-y-12"
          @click.native="showModal = false"
          :hollow="
            modalContent.status === 'error' || modalContent.status === 'warning'
          "
        />
        <btn
          v-if="
            modalContent.status === 'error' || modalContent.status === 'warning'
          "
          text="Retry"
          notLink
          class="modal-btn w-full text-lg transform -translate-y-12"
          @click.native="retry"
        />
      </div>
    </Modal>
  </form>
</template>

<script>
import ClickOutside from "vue-click-outside";
import axios from "axios";
import parsePhoneNumber from "libphonenumber-js";

export default {
  components: {
    PhoneFormInputCode: () => import("@/components/PhoneFormInputCode"),
    PhoneFormInputNumber: () => import("@/components/PhoneFormInputNumber"),
    SubmitButton: () => import("@/components/SubmitButton"),
    Modal: () => import("@/components/Modal"),
    AppImage: () => import("@/components/AppImage"),
    btn: () => import("@/components/BtnRounded"),
  },

  props: {
    list: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      selected: "+44",
      showMenu: false,
      query: "",
      number: "",
      requestSuccess: -1,
      showModal: false,
      modalContent: {
        title: "The heading",
        para: "this is some text",
        status: null,
      },
    };
  },

  methods: {
    entryClicked(e) {
      this.selected = e.dialCode;
      this.showMenu = false;
    },

    hideMenu() {
      this.showMenu = false;
    },

    send() {
      const phoneNumber = parsePhoneNumber(this.fullNumber, "UK");
      phoneNumber && phoneNumber.isValid()
        ? this.getTokenAndSendNumber()
        : ((this.showModal = true),
          (this.modalContent.title = "Oops! Something went wrong."),
          (this.modalContent.para = `Phone number ${phoneNumber.formatInternational(
            this.fullNumber
          )} is not valid.`),
          (this.modalContent.status = "warning"));
    },

    async getTokenAndSendNumber() {
      this.requestSuccess = 2;

      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", "5s5kj1if9o3gi5clv1e1gtresj");
      params.append("scope", "website-api/send_sms");
      params.append(
        "client_secret",
        "11lhhmkeg22c8cimj954qoosd9u2ft3augtdag4bs3l9urns93rc"
      );
      try {
        const res = await axios.post(
          "https://uown.auth.eu-west-2.amazoncognito.com/oauth2/token",
          params
        );
        this.sendNumber(res.data.access_token);
      } catch (err) {
        this.requestSuccess = 0;
        this.modalContent.title = "Oops! Something went wrong.";
        this.modalContent.para = "There was a problem sending the message.";
        this.modalContent.status = "warning";
        this.showModal = true;
        console.error(err);
      }
    },

    async sendNumber(token) {
      try {
        const res = await axios.post(
          // "https://ot43qmzasf.execute-api.eu-west-2.amazonaws.com/dev/signup",
          // "/sms/todos/1",
          "/sms/dev/signup",
          { number: this.fullNumber },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.requestSuccess = 1;
        this.showModal = true;
        this.modalContent.title = "Thank you for signing up!";
        this.modalContent.para =
          "We have sent you a text with a link to download the app.";
        this.modalContent.status = null;
        console.log(res);
      } catch (err) {
        this.requestSuccess = 0;
        this.modalContent.title = "Oops! Something went wrong.";
        this.modalContent.para = "There was a problem sending the message.";
        this.modalContent.status = "warning";
        this.showModal = true;
        console.error(err);
      }
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.$nextTick().then(() => this.$refs.searchInput.focus());
    },

    retry() {
      this.number = "";
      this.selected = "";
      this.showModal = false;
    },
  },

  computed: {
    computedList() {
      return this.list.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.query.toLowerCase()) !== -1
      );
    },

    fullNumber() {
      return this.selected + this.number;
    },

    btnDisabled() {
      return this.number.length < 6 || !this.selected ? true : false;
    },
  },

  directives: {
    ClickOutside,
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
};
</script>

<style lang='scss' scoped>
.form {
  max-width: 500px;
  grid-template-columns: 6rem 1fr auto;
}

.btn {
  width: 8rem;
}

.menu {
  top: calc(100% + 5px);
}

.list-container {
  max-height: 25rem;
}

.modal-btn ::v-deep button {
  width: 100%;
}
</style>