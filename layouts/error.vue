<template>
  <div
    v-if="error.statusCode === 404"
    class="mt-from-header min-h-screen py-12 lg:py-20 overflow-hidden sm:flex relative"
  >
    <div class="images sm:absolute inset-0 transform sm:translate-y-24">
      <appImage
        :sourceWebp="require('@/assets/images/404.png?webp')"
        :source="require('@/assets/images/404.png')"
        class="img absolute left-0 h-full w-full z-1"
        imgClasses="object-contain"
      />
      <img src="@/assets/images/rounded-box-aquamarine.svg" alt class="bg-img -z-1" />
    </div>
    <div class="container sm:grid grid-cols-2 gap-5 items-center z-1">
      <div class="text">
        <Heading
          text="Sorry. This page does not exist (anymore)."
          class="opacity-60 leading-tight"
          notBold
        />
        <p class="text-2xl opacity-60 my-5">How can we help you?</p>
        <div class="links grid sm:grid-cols-2 gap-y-4 gap-x-6 opacity-80">
          <caretLink link="/contact" text="Contact us" class="pb-2" />
          <caretLink link="/ethos" text="Our Ethos" class="pb-2" />
          <caretLink link="/the-hub/1" text="The Hub" class="pb-2" />
          <caretLink link="/details" text="UOWN Details" class="pb-2" />
          <caretLink link="/help-centre" text="Help Centre" class="pb-2" />
          <caretLink link="/topic/getting-started" text="Getting Started" class="pb-2" />
        </div>
        <btnRouded text="Back to homepage" link="/" class="mt-10 text-xl" />
      </div>
    </div>
  </div>
</template>

<script>
import appImage from "@/components/AppImage";
import Heading from "@/components/Heading";
import caretLink from "@/components/CaretLink";
import btnRouded from "@/components/BtnRounded";

export default {
  props: ["error"],

  components: {
    appImage,
    Heading,
    caretLink,
    btnRouded
  },

  head() {
    return {
      title: this.getTitle
    };
  },

  computed: {
    getTitle() {
      return this.error.statusCode === 404 ? "Not found" : "Error";
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.bg-img {
  transform: rotate(100deg);
}

@media (min-width: $sm) {
  .bg-img {
    transform: rotate(102deg) scale(2) translate(12vw, 12vw);
  }

  .images {
    width: 50%;
  }

  .text {
    grid-column: 2;
  }

  .img {
    transform: scale(1.25) translateY(-10vw);
  }
}

@media (min-width: $lg) {
  .img {
    height: 50%;
    top: 50%;
    transform: scale(2) translateY(-11vw);
  }
}
</style>