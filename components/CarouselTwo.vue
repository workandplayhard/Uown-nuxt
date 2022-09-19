<template>
  <transition-group name="fade" tag="div" class="relative">
    <div
      v-for="slide in $store.state.invest.carouselTwoSlides"
      :key="slide.id"
      v-show="slide.id == $store.state.invest.currentCarouselTwoSlide"
      class="
        container
        grid grid-rows-2
        sm:grid-rows-none sm:grid-cols-2
        sm:gap-32
        items-start
        sm:items-center
        py-12
        absolute
        inset-0
      "
      id="carouselScroll"
    >
      <div>
        <heading :text="slide.heading" class="mb-2" />
        <p v-html="slide.text" class="text-xl"></p>
        <BtnRounded
          text="Invest"
          underText="Capital at risk."
          link="invest"
          invest
          class="mt-3 text-xl"
        />
      </div>
      <AppImage
        class="
          slide-img
          transform
          -translate-y-24
          sm:translate-y-0
          h-full
          sm:h-auto
        "
        :sourceWebp="require(`~/assets/images/c2-img-${slide.id}.png?webp`)"
        :source="require(`~/assets/images/c2-img-${slide.id}.png`)"
        imgClasses="sm:h-auto object-contain"
      />
      <dots
        :slidesLength="$store.state.invest.carouselTwoSlides.length"
        :currentSlide="$store.state.invest.currentCarouselTwoSlide"
        carouselName="CarouselTwo"
        store="invest"
      />
    </div>
  </transition-group>
</template>

<script>
const BtnRounded = () => import("../components/BtnRounded");
import CarouselDot from "../components/CarouselDot";
import AppImage from "../components/AppImage";
import dots from "@/components/CarouselDots";
import Heading from "./Heading.vue";

export default {
  name: "CarouselTwo",
  components: {
    BtnRounded,
    CarouselDot,
    AppImage,
    dots,
    Heading,
  },
  methods: {
    goToSlide(payload) {
      this.$store.commit("goToSlide", payload);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.slide-img {
  justify-self: center;
}

@media (min-width: $sm) {
  .slide-img {
    justify-self: end;
    margin-right: 5vw;
  }
}
</style>