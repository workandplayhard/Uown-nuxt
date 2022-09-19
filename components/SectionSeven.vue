<template>
  <div class="bg-light section-seven bg-no-repeat bg-contain h-full flex relative py-20 sm:py-0">
    <div class="container grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-16 items-center">
      <!-- moved the image up in mobile so that it will not be cut off despite the existance of address bar -->
      <cld-image
        :public-id="imgOptions.img"
        secure="true"
        dpr="1.5"
        responsive="width"
        width="auto"
        crop="fill"
        fetchFormat="auto"
        :class="[imgOptions.classes, 'img absolute']"
      >
        <cld-placeholder type="vectorize"></cld-placeholder>
      </cld-image>
      <div class="content z-1">
        <h1 class="font-family-bold text-3xl mb-2">Together we can create amazing things.</h1>
        <p class="text-xl">Property crowdfunding is a great example of what a collective can achieve.</p>
        <p class="text-xl">In a matter of minutes, you can be up and running with your investments and on your road to building your future.</p>
        <BtnRounded text="Invest" underText='Capital at risk.' link='invest' invest class="mt-1 text-xl" />
      </div>
    </div>
  </div>
</template>

<script>
const BtnRounded = () => import( "../components/BtnRounded");
import AppImage from "../components/AppImage";
export default {
  name: "SectionSeven",
  components: {
    BtnRounded,
    AppImage
  },

  computed: {
    imgOptions() {
      return this.$mq !== 'sm' ? {
        img: 'img-s7-lg_u4jgb9.png',
        classes: 'h-full'
      }
      : {
        img: 'img-s7_gisobq.png',
        classes: 'h-50 transform -translate-y-10 sm:translate-y-0'
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.img {
  bottom: 1rem;
  left: -44vw;
}

@media (min-width: $sm) {
  .content {
    grid-column: 2;
  }

  .img {
    left: -13vw;
    bottom: unset;
    max-width: 65vw;
  }
}
</style>