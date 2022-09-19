<template>
  <div
    class="main relative grid grid-rows-2 gap-x-20 md:flex md:items-center min-h-minus-header overflow-hidden pt-10 pb-24"
    :class="{ 'bg-light': bgGray }"
  >
    <div class="container md:grid grid-cols-2 gap-y-10 gap-x-20 z-1">
      <div>
        <heading :text="title" class="mb-2" />
        <p class="text-xl">
          Unlike some other platforms our background is in property. We have all
          the skills, knowledge and expertise to take care of all the details.
        </p>
        <transition-group name="fade" class="text-xl space-y-4" tag="ul">
          <dotText
            v-for="(e, i) in content"
            :key="i + 1"
            :bg="e.bg"
            :text="e.li"
            :class="i <= currentSlide ? 'opacity-100' : 'opacity-0'"
          ></dotText>
        </transition-group>
        <p class="mt-5 text-sm transition-opacity duration-500" :class="currentSlide === 3 ? 'opacity-60' : 'opacity-0'" v-html="note"></p>
      </div>
    </div>
    <div
      class="images-wrapper relative md:absolute md:top-1/2 transform md:-translate-y-1/2 md:scale-125"
    >
      <img :src="getImgSource" alt class="shape relative w-full" />
      <transition-group
        name="fade"
        tag="div"
        class="circles absolute top-1/2 transform -translate-y-24 md:-translate-y-1/2 scale-75 lg:scale-100 -translate-x-20 md:translate-x-12 text-white font-family-bold h-50 w-full hidden sm:block"
        :class="{ 'circles-2': circles2 }"
      >
        <AppCircle
          v-for="(e, i) in content"
          :key="i + 1"
          v-show="i <= currentSlide"
          :value="e.value"
          :bg="e.bg"
          :scale="e.scale"
          :has1="e.has1"
          :valueScale="e.valueScale"
          :class="'c' + (i + 1)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import BannerText from "../components/BannerText";
import heading from "@/components/Heading";
import AppCircle from "@/components/AppCircle";
import dotText from "@/components/DotText";

export default {
  components: {
    BannerText,
    heading,
    AppCircle,
    dotText,
  },

  data() {
    return {
      scrollOffset: "",
    };
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    textRight: {
      type: Boolean,
    },
    bgGray: {
      type: Boolean,
    },
    content: {
      type: Array,
      required: true,
    },
    currentSlide: {
      type: Number,
    },
    circles2: {
      type: Boolean,
    },
    note: {
      type: String,
      required: true,
    },
  },

  computed: {
    getScrollOffset() {
      return this.$mq == "sm"
        ? (this.scrollOffset = -58)
        : (this.scrollOffset = 200);
    },

    getImgSource() {
      return this.bgGray
        ? require("@/assets/images/W-white.svg")
        : require("@/assets/images/W.svg");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.shape {
  transform: rotate(12deg) scale(1.2);
  right: -10%;
}

.object {
  left: -70%;
  top: -12%;
}

.images-wrapper {
  right: -40%;
}

.c1 {
  top: 19vh;
  left: -14vh;
}

.c2 {
  top: -6vh;
  left: -4vh;
}

.c3 {
  top: 18vh;
  left: 12.5vh;
}

.circles {
  &-2 {
    .c1 {
      top: -5vh;
    }

    .c2 {
      top: 19vh;
    }

    .c3 {
      top: -5vh;
    }
  }
}

.dot {
  min-width: 1.5rem;
}

@media (min-width: $md) {
  .main {
    padding: 15vw 0;
  }

  .images-wrapper {
    width: 50%;
    right: -4%;
  }

  .object {
    left: -55%;
  }
}

@media (min-width: $lg) {
  .images-wrapper {
    right: -15%;
  }
}

@media (orientation: portrait) and (min-width: $md) {
  .c1 {
    top: 3vh;
    left: -13vh;
  }

  .c2 {
    top: -11vh;
    left: -4vh;
  }

  .c3 {
    top: 3vh;
    left: 6.5vh;
  }

  .circles {
    &-2 {
      .c1 {
        top: -16vh;
      }

      .c2 {
        top: -1vh;
      }

      .c3 {
        top: -16vh;
      }
    }
  }

  .circle {
    font-size: 500%;
  }
}

@media (orientation: landscape) and (min-width: $md) {
  .images-wrapper {
    right: -11%;
  }
}

@media (orientation: portrait) and (min-width: $lg) {
  .images-wrapper {
    transform: translate(-20%, -50%) scale(0.85);
  }

  .circle {
    font-size: 600%;
  }
}
</style>