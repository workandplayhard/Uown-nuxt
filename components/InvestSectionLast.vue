<template>
  <div class="main grid grid-rows-2 sm:flex overflow-hidden py-10 relative">
    <div class="container sm:grid grid-cols-2 gap-10 z-1 sm:self-center">
      <transition-group name="fade" tag="div" class="text relative sm:mr-6">
        <div
          class="absolute top-0 sm:top-1/2 transform sm:-translate-y-1/2"
          v-for="(e, i) in $store.state.invest.sectionFiveSlides"
          :key="'text-' + i"
          v-show="i == $store.state.invest.sectionFiveCurrentSlide"
        >
          <heading :text="e.title" class="mb-2" />
          <p class="text-xl" v-interpolation v-html="e.para"></p>
          <btn
            class="mt-2 text-xl"
            :text="e.btnOptions.text"
            :link="e.btnOptions.link"
          />
        </div>
      </transition-group>
    </div>
    <CarouselDots
      :slidesLength="$store.state.invest.sectionFiveSlides.length"
      :currentSlide="$store.state.invest.sectionFiveCurrentSlide"
      carouselName="sectionFiveSlides"
      store="invest"
    />
    <div
      class="
        images-wrapper
        relative
        sm:absolute
        sm:top-1/2
        transform
        sm:-translate-y-1/2
        scale-125
        self-center
      "
    >
      <img
        :src="require('@/assets/images/rounded-box-2-gray.svg')"
        alt
        class="w-full shape"
      />
      <transition-group name="fade">
        <!-- moved the image up in mobile so that it will not be cut off despite the existance of address bar -->
        <AppImage
          v-for="(e, i) in $store.state.invest.sectionFiveSlides"
          :key="'img-' + i"
          v-show="i == $store.state.invest.sectionFiveCurrentSlide"
          :sourceWebp="require(`@/assets/images/${e.img}?webp`)"
          :source="require(`@/assets/images/${e.img}`)"
          class="object absolute w-full"
          imgClasses="object-contain transform -translate-y-12 sm:translate-y-0"
          :style="imgTransform(e.imgScale, e.imgTranslateX)"
        />
      </transition-group>
    </div>
  </div>
</template>


<script>
import btn from "../components/BtnRounded";
import AppImage from "../components/AppImage";
import heading from "../components/Heading";
import CarouselDots from "@/components/CarouselDots";

export default {
  components: {
    btn,
    AppImage,
    heading,
    CarouselDots,
  },

  methods: {
    imgTransform(scale, translateX) {
      return {
        transform: `scale(${scale}) translateX(${translateX}%)`,
      };
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

p {
  margin-bottom: 1rem;
}

// moved the image up in mobile so that it will not be cut off despite the existance of address bar
.shape {
  transform: rotate(10deg) translateY(-3rem);
}

.object {
  right: -10%;
  top: -5%;
}

.images-wrapper {
  left: -25%;
}

@media (min-width: $sm) {
  .main {
    padding: 22.5vw 0;

    .text {
      grid-column: 2;
    }
  }

  .images-wrapper {
    width: 50%;
    left: -12%;
  }

  // removed translateY
  .shape {
    transform: rotate(10deg);
  }
}
</style>