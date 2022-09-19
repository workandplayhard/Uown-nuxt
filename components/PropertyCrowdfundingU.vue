<template>
  <section
    class="pt-12 overflow-hidden relative flex items-center"
    :class="{
      'text-left lg:py-32': textLeft,
      'sm:pt-48 lg:py-24 relative': !textLeft,
    }"
  >
    <div
      class="container grid lg:grid-cols-2 gap-12 relative"
      :class="{ relative: textLeft }"
    >
      <img
        src="@/assets/images/rounded-box-aquamarine.svg"
        alt
        class="u absolute -z-1"
        :class="{ 'hidden lg:block': textLeft }"
      />
      <div
        class="img hidden absolute lg:static"
        :class="{ 'lg:block': textLeft, 'sm:block': !textLeft }"
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
      <div class="content">
        <heading :text="title" />
        <p v-for="(para, i) in paras" :key="i" class="text-lg">{{ para }}</p>
        <btn
          text="INVEST"
          link="https://app.uown.co/properties"
          outerLink
          underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'> at risk</a>"
          invest
          class="mt-8"
        />
      </div>
    </div>
  </section>
</template>

<script>
import appImage from "@/components/AppImage";
import btn from "@/components/BtnRounded";
import heading from "@/components/HeadingWithLine";

export default {
  components: {
    appImage,
    heading,
    btn,
  },

  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    paras: {
      type: Array,
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

.u {
  transform: rotate(-150deg);
  right: -22rem;
  top: -24rem;
  max-width: 35rem;
}

.img {
  width: 13rem;
  top: -11rem;
  right: -2rem;
}

@media (min-width: $sm) {
  .u {
    transform: rotate(-142deg);
    right: -19rem;
    top: -27rem;
  }
}

@media (min-width: $lg) {
  .u {
    transform: rotate(40deg) scale(1.75);
    width: 50%;
    left: -18%;
    top: -25%;
    max-width: unset;
  }

  .img {
    width: 100%;
  }

  .text-left {
    .img {
      grid-column: 2;
      grid-row: 1;
    }

    .content {
      grid-column: 1;
      grid-row: 1;
    }

    .u {
      transform: rotate(-150deg);
      top: -28%;
      left: unset;
      right: -34%;
      width: 70%;
    }
  }
}
</style>