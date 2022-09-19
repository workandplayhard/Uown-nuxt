<template>
  <form
    name="product-not-available"
    class="flex"
    :class="{ 'flex-col sm:flex-row': stackedOnMobile }"
    @submit.prevent="sendEmail()"
  >
    <input
      v-model="email"
      type="email"
      name="Email"
      placeholder="Email"
      class="input flex-grow py-2 px-3 focus:outline-none w-full"
      :class="{
        'mb-2 sm:mb-0': stackedOnMobile,
        rounded: stackedOnMobile && !roundedBtn,
        'rounded-l': !stackedOnMobile && !roundedBtn,
        'rounded text-lg': roundedBtn
      }"
      required
    />
    <btn
      :stackedOnMobile="stackedOnMobile"
      :loading="loading"
      :email="email"
      :roundedBtn="roundedBtn"
    />
  </form>
</template>

<script>
import btn from "@/components/EmailAndButton1Button";
import sendEmail from "@/mixins/sendEmail";
import emailAndButton from "@/mixins/emailAndButton";

export default {
  components: {
    btn
  },

  props: {
    roundedBtn: {
      type: Boolean
    }
  },

  mixins: [sendEmail, emailAndButton]
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.input {
  min-width: 16rem;
  background: #f1f1f1;
  border-radius: 1000px;
  width: 387px;
  height: 45px;
  padding-left: 1rem;
  font-weight: 500;
}

::placeholder {
  color: #767676 !important;
  opacity: 1 !important; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #767676 !important;
  opacity: 1;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #767676 !important;
}

@media (max-width: $sm) {
  input {
    width: 231px !important;
  }

  button {
    margin: auto;
  }
}
</style>
