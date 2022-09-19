<template>
  <form
    name="product-not-available"
    class="flex"
    :class="{ 'flex-col sm:flex-row': stackedOnMobile }"
    @submit.prevent="sendEmail"
  >
    <input
      type="email"
      name="_Email"
      v-model="email"
      placeholder="Email"
      class="input flex-grow bg-white py-2 px-3 focus:outline-none focus:border-softnavy border border-transparent text-softnavy w-full"
      :class="{
        'rounded sm:rounded-r-none mb-2 sm:mb-0': stackedOnMobile,
        'rounded-l': !stackedOnMobile,
      }"
      required
      @input="checkValidity"
    >
    <input type="text" name="Email" v-model="messageToSend" class="hidden">
    <btn
      class="btn transition-opacity duration-200"
      :stackedOnMobile="stackedOnMobile"
      :loading="loading"
      :disabled="!isInputValid"
    />
  </form>
</template>

<script>
import sendEmail from "@/mixins/sendEmail";
import btn from "@/components/EmailAndButton2Button";
import emailAndButton from "@/mixins/emailAndButton";

export default {
  components: {
    btn,
  },

  data: () => ({
    isInputValid: false
  }),

  methods: {
    checkValidity(e) {
      this.isInputValid = e.target.checkValidity()
    }
  },

  mixins: [sendEmail, emailAndButton],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.input {
  background-color: rgba(#5a6cc0, 0.15);
}

@media (min-width: $md) {
  .input {
    min-width: 16rem;
  }
}
</style>