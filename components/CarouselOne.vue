<template>
  <transition-group
    name="fade"
    class="
      items-center
      min-h-screen
      bg-light
      flex
      items-center
      relative
      carousel-one
      bg-no-repeat
    "
  >
    <div
      v-for="slide in $store.state.carouselOneSlides"
      :key="slide.id"
      v-show="slide.id == $store.state.currentCarouselOneSlide"
      class
    >
      <AppImage
        :sourceWebp="
          require('~/assets/images/c1-img-' + slide.id + '-lg.png?webp')
        "
        :source="require('~/assets/images/c1-img-' + slide.id + '-lg.png')"
        class="
          z-10
          absolute
          slide-img
          h-50
          sm:top-1/2
          max-w-none
          sm:max-w-full
          hidden
          sm:flex
          items-center
          h-full
        "
        imgClasses="object-contain"
      />

      <div
        class="
          container
          py-12
          grid grid-rows-2
          sm:grid-rows-none sm:grid-cols-2
          sm:gap-32
          h-full
          absolute
          inset-0
          items-start
          sm:items-center
        "
      >
        <div class="content">
          <h1 class="text-3xl mb-5">{{ slide.heading }}</h1>
          <p>{{ slide.text }}</p>
          <a href="#" class="block text-link">See all finance options</a>
          <div class="hidden sm:flex items-center mt-5">
            <img
              src="~/assets/images/arrow.svg"
              alt
              class="mr-3 transform rotate-180 w-8"
              @click="prevSlide"
            />
            <img
              src="~/assets/images/arrow.svg"
              alt
              class="w-8"
              @click="nextSlide"
            />
          </div>
        </div>
      </div>
      <div
        class="
          dots
          grid grid-flow-col
          sm:grid-flow-row
          sm:justify-end
          items-end
          left-1/2
          -translate-x-1/2
          sm:left-auto
          sm:translate-x-0
          sm:items-center
          bottom-0
          sm:bottom-auto
          absolute
          sm:right-0
          sm:top-1/2
          transform
          -translate-y-12
          sm:-translate-y-1/2
          gap-5
          sm:hidden
        "
        id="carouselDots"
      >
        <CarouselDot
          v-for="(e, i) in $store.state.carouselOneSlides.length"
          :key="e"
          :class="{ active: e == slide.id + 1 }"
          @click.native="goToSlide({ index: i, carouselName: 'CarouselOne' })"
        />
      </div>
    </div>
  </transition-group>
</template>

<script>
import { mapState } from "vuex";
import CarouselDot from "../components/CarouselDot";
import AppImage from "../components/AppImage";

export default {
  name: "CarouselOne",
  components: {
    CarouselDot,
    AppImage,
  },
  methods: {
    nextSlide() {
      this.$store.commit("nextSlide", { carouselNumber: 1 });
    },
    prevSlide() {
      this.$store.commit("prevSlide", { carouselNumber: 1 });
    },
    goToSlide(payload) {
      this.$store.commit("goToSlide", payload);
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

h1 {
  font-family: "plus jakarta extra bold";
}

.slide-img {
  left: -8rem;
  bottom: 5rem;
}

.content {
  grid-column: 2;
}

@media (min-width: $sm) {
  .slide-img {
    height: 50%;
    max-width: 75vw;
    left: -19%;
    height: 93%;
    transform: translateY(-50%);
  }
}
</style>