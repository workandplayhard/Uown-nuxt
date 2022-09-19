<template>
  <div
    class="main relative grid grid-rows-2 gap-y-12 gap-x-20 sm:flex sm:items-center min-h-minus-header overflow-hidden pt-10 pb-24"
    :class="{ textRight, 'sm:-mt-16': isHero }"
  >
    <div class="container sm:grid grid-cols-2 gap-y-10 gap-x-16 z-1">
      <BannerText
        :title="title"
        :para="para"
        :btnText="btnText"
        :btnLink="btnLink"
        :btnNotLink="btnNotLink"
        :scrollTo="scrollTo"
        :scrollOffset="scrollOffset"
        class="text"
      />
    </div>
    <div class="images-wrapper relative sm:absolute top-1/2">
      <img
        :src="require('@/assets/images/W.svg')"
        alt
        class="shape relative w-full"
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
        class="object absolute top-0 transform -translate-y-1/2"
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
        class="object absolute top-0 transform -translate-y-1/2 w-full"
        imgClasses="object-contain"
      />
    </div>
  </div>
</template>

<script>
import BannerText from "../components/BannerText";
import AppImage from "../components/AppImage";
export default {
  components: {
    BannerText,
    AppImage,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    btnLink: {
      type: String,
      default: "#",
    },
    imgOptions: {
      type: Object,
      required: true,
    },
    textRight: {
      type: Boolean,
    },
    isHero: {
      type: Boolean,
    },
    btnNotLink: {
      type: Boolean,
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
      return {
        transform: `translateY(calc(-50% + ${
          this.imgOptions.translateY ? this.imgOptions.translateY : 0
        }rem)) scale(${
          this.imgOptions.scale ? this.imgOptions.scale : 1
        })`,
      };
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.shape {
  transform: rotate(-25deg) translateY(-55%) scale(1.2);
  right: -10%;
}

.object {
  left: -35%;
  top: -12%;
}

.images-wrapper {
  right: -40%;
}

.textRight {
  .shape {
    transform: rotate(25deg) translate(-5%, -55%) scale(1.2);
    right: unset;
    left: -10%;
  }

  .object {
    left: unset;
    right: -35%;
  }

  .images-wrapper {
    right: unset;
    left: -40%;
  }
}

@media (min-width: $sm) {
  .main {
    padding: 15vw 0;
  }

  .images-wrapper {
    width: 50%;
    right: -15%;
  }

  .object {
    left: -30%;
  }

  .textRight {
    .images-wrapper {
      right: unset;
      left: -15%;
    }

    .text {
      grid-column: 2;
    }

    .object {
      left: unset;
      right: -30%;
    }
  }
}
</style>