<template>
  <transition name="fade">
    <div
      class="email-banner fixed px-4 pb-6 pt-4 rounded-lg z-1 bg-white shadow-md"
      :class="{ 'has-overlay': success }"
      :style="bottomPosition"
    >
      <appImage
        :source="require('@/assets/images/cross.png')"
        :sourceWebp="require('@/assets/images/cross.png?webp')"
        :lazyLoad="false"
        class="close absolute top-0 opacity-50 hover:opacity-75 cursor-pointer transition-opacity duration-200 w-6"
        @click.native="$emit('hide')"
      />
      <div>
        <p class="mb-4 text-black">
          Sorry, this product isn’t available yet. Enter your email address to
          keep updated as to when it’s ready.
        </p>
        <emailAndButton2
          @form-submitted="(success = $event[0]), (error = $event[1])"
        />
      </div>
      <alertError v-if="error" class="mt-3" />
    </div>
  </transition>
</template>

<script>
import appImage from "@/components/AppImage";
import emailAndButton2 from "@/components/EmailAndButton2";
import alertError from "@/components/AlertError";
import emailBanner from "@/mixins/emailBanner";

export default {
  components: {
    appImage,
    emailAndButton2,
    alertError,
  },

  computed: {
    bottomPosition() {
      return this.$store.state.persist.cookieAlertVisible &&
        (this.$mq === "sm" || this.$mq === "md")
        ? {
            bottom: "8rem",
          }
        : {
            bottom: "1.5rem",
          };
    },
  },

  mixins: [emailBanner],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.email-banner {
  right: 3rem;
  border: 2px solid #5a6cc0;
  max-width: calc(100% - 4.5rem);
  // added transition to bottom so that when cookie popup is closed on mobile, this email popup will slide down. Added transition to transform as well otherwise transition of transition tag will be disabled.
  transition: transform 0.5s ease-in-out, bottom 0.5s, opacity 0.5s;

  &-overlay::before {
    @layer components {
      @apply rounded-md;
    }
  }
}

.close {
  right: -2rem;
}

@media (min-width: $sm) {
  .email-banner {
    max-width: 26rem;
  }
}
</style>