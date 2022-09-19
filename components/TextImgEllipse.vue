<template>
  <div
    class="main grid grid-rows-2 sm:flex min-h-minus-header overflow-hidden py-10 relative"
    :class="{ 'text-left': textLeft }"
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
          :outerLink="btnOuterLink"
          :scrollTo="scrollTo"
          :scrollOffset="scrollOffset"
          :underText="btnUnderText"
        />
      </div>
    </div>
    <CarouselDots
      v-if="dots"
      :slidesLength="$store.state.invest.sectionPhoneSlides.length"
      :currentSlide="$store.state.invest.sectionPhoneCurrentSlide"
      carouselName="sectionPhoneSlides"
      store="invest"
      left
    />
    <div
      class="images-wrapper relative sm:absolute sm:top-1/2 transform sm:-translate-y-1/2 transform -translate-y-12 sm:translate-y-0 self-center"
      :class="{ 'scale-125': big }"
    >
      <img
        :src="require('@/assets/images/ellipse-gray.svg')"
        alt
        class="w-full transform scale-x-110"
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
        class="object absolute top-0"
        :style="getImgScale"
      >
        <cld-placeholder type="vectorize"></cld-placeholder>
      </cld-image>
      <AppImage
        v-else
        :source="imgOptions.source"
        :sourceWebp="imgOptions.sourceWebp"
        :lazyLoad="imgOptions.lazyLoad"
        class="object absolute top-0 w-full"
        :style="getImgScale"
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
    // img: {
    //   type: String,
    //   required: true
    // },
    big: {
      type: Boolean,
    },
    // imgScale: {
    //   type: Number,
    //   default: 1
    // },
    // imgTranslateX: {
    //   type: Number,
    //   default: 0
    // },
    // imgLazyLoad: {
    //   type: Boolean,
    //   default: true
    // },
    dots: {
      type: Boolean,
    },
    scrollTo: {
      type: String,
    },
    scrollOffset: {
      type: Number,
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
  },

  computed: {
    getImgScale() {
      let scale = this.imgOptions.scale ? this.imgOptions.scale : 1;
      let translateX = this.imgOptions.translateX
        ? this.imgOptions.translateX
        : 0;
      return {
        transform: `translateX(${translateX}rem) scale(${scale})`,
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

.text-left {
  .object {
    right: 45%;
  }

  .images-wrapper {
    left: unset;
    right: -40%;
  }
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

    &:not(.text-left) {
      .text {
        grid-column: 2;
      }
    }
  }

  .images-wrapper {
    width: 50%;
    left: -15%;
  }

  .text-left .images-wrapper {
    left: unset;
    right: -15%;
  }
}
</style>