<template>
  <div class="main grid grid-rows-2 sm:flex overflow-hidden py-10 relative">
    <div class="container sm:grid grid-cols-2 gap-10 z-1 sm:self-center">
      <transition-group name="fade" tag="div" class="text relative">
        <div
          class="absolute top-0 sm:top-1/2 transform sm:-translate-y-1/2"
          v-for="(e, i) in $store.state.sectionPhoneSlides"
          :key="'text-' + i"
          v-show="i == $store.state.sectionPhoneCurrentSlide"
        >
          <heading :text="e.title" class="mb-2" />
          <div class="para text-xl" v-html="e.para"></div>
          <btn
            class="mt-2 text-xl"
            :text="e.btnOptions.text"
            :link="e.btnOptions.link"
            :outerLink="e.btnOptions.outerLink"
            :underText="e.btnOptions.underText"
          />
        </div>
      </transition-group>
    </div>
    <CarouselDots
      :slidesLength="$store.state.sectionPhoneSlides.length"
      :currentSlide="$store.state.sectionPhoneCurrentSlide"
      carouselName="sectionPhoneSlides"
      left
    />
    <div
      class="
        images-wrapper
        relative
        sm:absolute
        sm:top-1/2
        transform
        sm:-translate-y-1/2
        transform
        -translate-y-12
        sm:translate-y-0
        self-center
      "
    >
      <img
        :src="require('@/assets/images/ellipse-gray.svg')"
        alt
        class="w-full transform scale-x-110"
      />
      <transition-group name="fade">
        <AppImage
          v-for="(e, i) in $store.state.sectionPhoneSlides"
          :key="'img-' + i"
          v-show="i == $store.state.sectionPhoneCurrentSlide"
          :sourceWebp="require(`@/assets/images/phone-${i}.png?webp`)"
          :source="require(`@/assets/images/phone-${i}.png`)"
          class="object absolute w-full top-0"
          imgClasses="object-contain"
          :style="{ transform: 'scale(0.875)' }"
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
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.para {
  margin-bottom: 1rem;
}

.object {
  right: -45%;
}

.images-wrapper {
  left: -40%;
}

@media (min-width: $sm) {
  .main {
    padding: 13vw 0;

    .text {
      grid-column: 2;
    }
  }

  .images-wrapper {
    width: 50%;
    left: -15%;
  }
}
</style>