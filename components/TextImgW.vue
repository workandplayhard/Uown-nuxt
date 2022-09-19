<template>
  <div
    class="main relative grid grid-rows-2 gap-10 sm:flex items-center min-h-minus-header overflow-hidden pb-32 py-10"
    :class="{ textRight }"
  >
    <div class="container sm:grid grid-cols-2 gap-5 z-1">
      <div class="text">
        <heading :text="title" class="mb-2" />
        <slot></slot>
        <btn :text="btnText" :link="btnLink" :notLink='btnNotLink' :underText='btnUnderText' :outerLink='btnOuterLink' :scrollTo='scrollTo' class="mt-2 text-xl" />
      </div>
    </div>
    <div
      class="images-wrapper relative sm:absolute sm:top-1/2 transform scale-125 sm:-translate-y-1/2"
    >
      <img :src="require('@/assets/images/W.svg')" alt class="shape" :class="{ downward }" />
      <cld-image
        :public-id="img"
        secure="true"
        dpr="1.5"
        responsive="width"
        width="auto"
        crop="fill"
        fetchFormat="auto"
        class="object absolute top-1/2"
        :style="{ transform: `translateY(-50%) scale(${imgScale})` }"
      >
        <cld-placeholder type="vectorize"></cld-placeholder>
      </cld-image>
    </div>
  </div>
</template>

<script>
import Btn from "../components/BtnRounded";
import AppImage from "../components/AppImage";
import heading from "../components/Heading";
export default {
  components: {
    Btn,
    AppImage,
    heading
  },

  props: {
    textRight: {
      type: Boolean
    },
    title: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      required: true
    },
    btnLink: {
      type: String
    },
    btnUnderText: {
      type: String
    },
    img: {
      type: String,
      required: true
    },
    imgScale: {
      type: Number,
      default: 1
    },
    downward: {
      type: Boolean
    },
    btnNotLink: {
      type: Boolean
    },
    btnOuterLink: {
      type: Boolean
    },
    scrollTo: {
      type: String
    }
  },

  // computed: {
  //   getImgScale() {
  //     return {
  //       transform: `scale(${this.imgScale})`
  //     };
  //   }
  // }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

p {
  margin-bottom: 1rem;
}

.shape {
  transform: rotate(115deg);

  &.downward {
    transform: rotate(68deg) translateX(-5%);
  }
}

.object {
  right: 30%;
}

.text {
  z-index: 1;
}

.images-wrapper {
  right: -40%;
}

.textRight {
  .shape {
    transform: rotate(-115deg);

    &.downward {
      transform: rotate(-68deg) translateX(-5%);
    }
  }

  .images-wrapper {
    right: unset;
    left: -40%;
  }

  .object {
    right: unset;
    left: 30%;
  }
}

@media (min-width: $sm) {
  .main {
    padding: 24.5vw 0;

    &.textRight {
      padding: 23vw 0;
    }
  }

  .images-wrapper {
    width: 50%;
    right: -25%;
  }

  .textRight {
    .text {
      grid-column: 2;
    }

    .images-wrapper {
      right: unset;
      left: -25%;
    }

    .object {
      right: unset;
      left: 30%;
    }
  }
}
</style>