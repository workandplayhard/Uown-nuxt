<template>
  <div
    class="main grid grid-rows-2 sm:flex min-h-minus-header overflow-hidden py-10 relative"
    :class="classes"
  >
    <div class="container sm:grid grid-cols-2 gap-10 z-1 sm:self-center">
      <div class="text">
        <heading :text="title" class="mb-2" />
        <slot></slot>
        <btn
          v-if="btnText"
          class="mt-2 text-xl"
          :text="btnText"
          :link="btnLink"
          :notLink="btnNotLink"
          :scrollTo="scrollTo"
          :outerLink="btnOuterLink"
          :underText="btnUnderText"
          :scrollOffset="scrollOffset"
        />
      </div>
    </div>
    <CarouselDots
      v-if="dots"
      :slidesLength="$store.state.invest.sectionFiveSlides.length"
      :currentSlide="$store.state.invest.sectionFiveCurrentSlide"
      carouselName="sectionFiveSlides"
      store="invest"
    />
    <div
      class="images-wrapper relative sm:absolute sm:top-1/2 transform sm:-translate-y-1/2 scale-125 self-center"
    >
      <img
        :src="require('@/assets/images/rounded-box-2-gray.svg')"
        alt
        class="w-full shape"
        :class="{ downward }"
      />
      <cld-image
        v-if="!imgOptions.hasOwnProperty('sourceWebp')"
        :public-id="imgOptions.source"
        secure="true"
        dpr="1.5"
        responsive="width"
        width="auto"
        crop="fill"
        fetchFormat="auto"
        class="object absolute"
        :style="getImgTransform"
      >
        <cld-placeholder type="vectorize"></cld-placeholder>
      </cld-image>
      <AppImage
        v-else
        :source="imgOptions.source"
        :sourceWebp="imgOptions.sourceWebp"
        :lazyLoad="imgOptions.lazyLoad"
        :style="getImgTransform"
        class="object absolute w-full"
      />
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

  props: {
    textLeft: {
      type: Boolean,
    },
    title: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
    },
    btnLink: {
      type: String,
      default: "#",
    },
    imgOptions: {
      type: Object,
      required: true,
    },
    dots: {
      type: Boolean,
    },
    downward: {
      type: Boolean,
    },
    isHero: {
      // this will set margins
      type: Boolean,
    },
    btnNotLink: {
      type: Boolean,
    },
    btnOuterLink: {
      type: Boolean,
    },
    btnUnderText: {
      type: String,
    },
    scrollTo: {
      type: String,
    },
    scrollOffset: {
      type: Number,
    },
  },

  computed: {
    getImgTransform() {
      let scale = this.imgOptions.scale ? this.imgOptions.scale : 1;
      let translateX = this.imgOptions.translateX
        ? this.imgOptions.translateX
        : 0;
      return {
        transform: `scale(${scale}) translateX(${translateX}%)`,
      };
    },

    classes() {
      return {
        "text-left": this.textLeft,
        "mb-10 sm:-mb-16 sm:-mt-16": this.isHero,
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

.shape {
  &:not(.downward) {
    transform: rotate(10deg);
  }

  &.downward {
    transform: rotate(85deg);
  }
}

.text-left {
  .object {
    right: 10%;
  }

  .images-wrapper {
    left: unset;
    right: -20%;
  }

  .shape {
    &:not(.downward) {
      transform: rotate(145deg);
    }

    &.downward {
      transform: rotate(65deg);
    }
  }
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

    &:not(.text-left) {
      .text {
        grid-column: 2;
      }
    }
  }

  .images-wrapper {
    width: 50%;
    left: -12%;
  }

  .text-left .images-wrapper {
    left: unset;
    right: -12%;
  }
}
</style>