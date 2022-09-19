<template>
  <transition name="slideY" v-if="!hidden">
    <div
      class="fixed bottom-0 left-0 right-0 py-3 z-1 border-t overflow-hidden"
      :class="{
        'bg-white': !ver2,
        'bg-softnavy pr-10 circle dark': ver2,
        'email-banner-overlay': success,
      }"
    >
      <div class="container">
        <div
          class="sm:grid gap-x-6 md:flex items-center justify-between md:space-x-8"
        >
          <img
            src="@/assets/images/cross-1.svg"
            alt
            class="cross opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer absolute sm:static w-6 z-1"
            :style="{ filter: crossStyle }"
            @click="hide()"
          />
          <p
            class="para md:mb-0 sm:text-lg"
            :class="{ 'text-black': !ver2, 'text-white': ver2 }"
          >
            Sorry, this product isn’t available yet. Enter your email address to
            keep updated as to when it’s ready.
          </p>
          <emailAndButton1
            v-if="ver2"
            class="email"
            stackedOnMobile
            roundedBtn
            @form-submitted="(success = $event[0]), (error = $event[1])"
          />
          <emailAndButton2
            v-else
            class="email"
            stackedOnMobile
            @form-submitted="(success = $event[0]), (error = $event[1])"
          />
        </div>
        <alertError v-if="error" class="mt-3" />
      </div>
    </div>
  </transition>
</template>

<script>
import emailAndButton2 from "@/components/EmailAndButton2";
import emailAndButton1 from "@/components/EmailAndButton1";
import alertError from "@/components/AlertError";
import emailBanner from "@/mixins/emailBanner";

export default {
  components: {
    emailAndButton1,
    emailAndButton2,
    alertError,
  },

  props: {
    ver2: {
      type: Boolean,
    },
  },

  computed: {
    crossStyle() {
      return this.ver2 ? "invert(1)" : "";
    },
  },

  mixins: [emailBanner],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.cross {
  grid-area: cross;
  top: 0.5rem;
  right: 0.5rem;
}

.para {
  grid-area: para;
  max-width: 95%;
}

.email {
  grid-area: email;
}

.container {
  grid-template-areas:
    "cross para"
    "cross email";
}

.circle {
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #aec5e4;
    border-radius: 50%;
    height: 150%;
    width: 6rem;
    right: -3rem;
    z-index: -1;
  }
}

@media (min-width: $sm) {
  .cross {
    min-width: 38px;
    max-width: 38px;
  }

  .para {
    max-width: unset;
  }
}
</style>