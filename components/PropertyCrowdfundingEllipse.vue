<template>
  <section class="section bg-no-repeat bg-contain sm:pb-12 overflow-hidden">
    <div
      class="container flex flex-col items-end lg:items-center lg:grid grid-cols-2 relative"
    >
      <img
        src="@/assets/images/ellipse-aquamarine.svg"
        alt
        class="ellipse absolute -z-1 hidden md:block"
        :class="{ right: textLeft }"
      />
      <div :class="{ 'col-start-2 row-start-1': !textLeft }">
        <heading :text="title" />
        <slot>
          <p class="text-xl" v-for="(p, i) in paras" :key="i">{{ p }}</p>
          <btn
            text="INVEST"
            outerLink
            invest
            link="https://app.uown.co/properties"
            underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'> at risk</a>"
            class="mt-8"
          />
        </slot>
      </div>
      <div
        class="img hidden md:block transform -translate-y-12 translate-x-12 lg:translate-y-0 lg:translate-x-0"
        :class="{ 'col-start-1 row-start-1': !textLeft }"
      >
        <cld-image
          :public-id="img"
          secure="true"
          dpr="1.5"
          responsive="width"
          width="auto"
          crop="fill"
          fetchFormat="auto"
        >
          <cld-placeholder type="vectorize"></cld-placeholder>
        </cld-image>
      </div>
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import btn from "@/components/BtnRounded";
import appImage from "@/components/AppImage";

export default {
  components: {
    heading,
    btn,
    appImage,
  },

  props: {
    paras: {
      type: Array,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    textLeft: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

// @media (min-width: $sm) {
//   .ellipse {
//     bottom: -22rem;
//     right: -20rem;
//     width: 30rem;
//   }
// }

@media (min-width: $md) {
  .img {
    width: 45%;
  }

  .ellipse {
    bottom: -2rem;
    right: -25%;
    width: 30rem;
  }
}

@media (min-width: $lg) {
  $x-offset: -30%;

  .section {
    background-image: none;
    padding: 10% 0;
  }

  .img {
    width: 100%;
  }

  .ellipse {
    bottom: unset;
    right: unset;
    left: $x-offset;
    width: 60%;

    &.right {
      left: unset;
      right: $x-offset;
    }
  }
}
</style>