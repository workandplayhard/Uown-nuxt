<template>
  <section class="lg:pb-64 overflow-hidden">
    <div class="container md:mt-32 lg:mt-64 relative">
      <img src="@/assets/images/rounded-box-aquamarine.svg" alt class="u absolute -z-1" />
      <heading text="Our process is simple." center />
      <div class="wrapper relative hidden md:block">
        <img src="@/assets/images/Circles.svg" alt class="h-full" />
        <span
          v-for="(e, i) in text"
          :key="'text-'+ i"
          class="absolute w-48 opacity-75"
          :class="'text-' + (i+1)"
          v-interpolation
          v-html="e"
        ></span>
      </div>
      <div class="space-y-6 md:space-y-0">
        <iconText
          v-for="(e,i) in text"
          :key="'icon-' + i"
          :src="require(`@/assets/images/circle-icon-${i+1}.jpg`)"
          :text="e"
          :reverse="i % 2 != 0"
          class="md:hidden"
        />
      </div>
      <btn
        text="SIGN UP"
        outerLink
        link="https://app.uown.co/register"
        hollow
        class="text-center mt-10"
      />
      <p class="mt-4 text-center">
        <span class="opacity-60">When you invest your capital is</span>
        <nuxt-link to="/risk-statement" class="opacity-60 link-underlined">at risk.</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import btn from "@/components/BtnRounded";
import iconText from "@/components/PropertyDevelopmentS6IconText";

export default {
  components: {
    heading,
    btn,
    iconText,
  },

  data() {
    return {
      text: [
        "<a href='https://app.uown.co/register' class='link-underlined'>Open an account</a> with us in minutes.",
        "<a href='https://app.uown.co/properties' class='link-underlined'>Select a development</a> to invest in.",
        "Choose your investment amount.",
        "Wait for the development to finish and property sales to <a href='/invest' class='link-underlined'>get your returns</a>",
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.text- {
  &1,
  &3 {
    left: 12.5rem;
  }

  &2,
  &4 {
    left: 21.5rem;
  }

  &1 {
    top: 3rem;
  }

  &2 {
    top: 11.5rem;
  }

  &3 {
    top: 20rem;
  }

  &4 {
    bottom: 3.5rem;
  }
}

.u {
  transform: rotate(215deg);
  max-width: unset;
  top: 10%;
  left: -35rem;
  width: 45rem;
}

@media (min-width: $sm) {
  .wrapper {
    height: 34.375em;
  }

  .u {
    top: 0;
  }
}

@media (min-width: $md) {
  .wrapper {
    left: 25%;
  }
  .u {
    transform: translateY(0%) rotate(215deg) scale(1.75);
    width: 50%;
    left: -25%;
  }
}

@media (min-width: $lg) {
  .u {
    top: 3%;
  }
}
</style>