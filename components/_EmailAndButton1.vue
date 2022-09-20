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
      class="input flex-grow bg-white py-2 px-3 focus:outline-none text-softnavy w-full"
      :class="{
        'mb-2 sm:mb-0': stackedOnMobile,
        'rounded sm:rounded-r-none': stackedOnMobile && !roundedBtn,
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

@media (min-width: $md) {
  .input {
    min-width: 16rem;
  }
}
</style>
