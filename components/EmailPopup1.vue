<template>
  <transition v-if="!hidden" name="slideY">
    <div
      class="email-banner dark fixed px-4 py-6 rounded-lg z-1 shadow-md"
      :class="{ 'email-banner-overlay': success }"
    >
      <p class="text-white mb-4 mt-5">
        Sorry, this product isn’t available yet. Enter your email address to
        keep updated as to when it’s ready.
      </p>
      <span
        class="z-1 close text-white absolute text-sm border-b opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200"
        @click="hide()"
        >Close</span
      >
      <emailAndButton
        @form-submitted="(success = $event[0]), (error = $event[1])"
      />
      <alertError v-if="error" class="mt-3" />
    </div>
  </transition>
</template>

<script>
import emailAndButton from "@/components/EmailAndButton1";
import alertError from "@/components/AlertError";
import emailBanner from "@/mixins/emailBanner";

export default {
  components: {
    emailAndButton,
    alertError,
  },

  mixins: [emailBanner],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.email-banner {
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: #5a6cc0;
  max-width: calc(100% - 3rem);

  &-overlay::before {
    @layer components {
      @apply rounded-md;
    }
  }
}

.close {
  top: 0.5rem;
  right: 0.5rem;
}

@media (min-width: $sm) {
  .email-banner {
    max-width: 26rem;
  }
}
</style>