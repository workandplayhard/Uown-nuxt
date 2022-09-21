<template>
  <div
    class="
      flex
      items-center
      text-center
      lg:text-left
      md:h-screen
      overflow-hidden
      way-to-invest
      bg-no-repeat bg-contain
      relative
    "
  >
    <div
      class="
        container
        lg:grid lg:grid-cols-1
        lg:grid-cols-2
        items-center
        gap-20
        flex flex-col
        lg:flex-row
      "
    >
      <div class="top-0 sm:static pt-12 sm:pt-0 pr-6 text md:order-1">
        <h1 class="text-4xl mb-2 sm:order-first">{{ heading }}</h1>
        <p
          v-html="para"
          class="text-xl sm:order-first w-322 md:w-544 lg:text-2xl"
        ></p>
        <BtnRounded
          v-bind="buttonOptions"
          class="mt-2 text-xl hidden lg:block xl:mt-8"
        />
      </div>
      <!-- moved the image up in mobile so that it will not be cut off despite the existance of address bar -->
      <img
        src="@/assets/images/small-house.png"
        class="lg:w-full sm:order-1 lg:order-first"
        alt
      />
      <BtnRounded
        v-bind="buttonOptions"
        class="mt-2 text-xl sm:visible sm:order-2 lg:hidden"
      />
    </div>
  </div>
</template>

<script>
const BtnRounded = () => import("../components/BtnRounded");
import Accordion from "../components/Accordion";
import AppImage from "../components/AppImage";

export default {
  name: "DropdownsSection",
  components: {
    BtnRounded,
    Accordion,
    AppImage
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    para: {
      type: String,
      required: true
    },
    accordionOArray: {
      type: Array
      // required: true,
    },
    imgSource: {
      type: String
    },
    imgSourceLg: {
      type: String
    },
    imgStyle: {
      type: Object
    },
    buttonOptions: {
      type: Object
    }
  },

  computed: {
    imgOptions() {
      return this.$mq !== "sm"
        ? {
            img: this.imgSourceLg,
            classes: "absolute bottom-0 img-lg"
          }
        : {
            img: this.imgSource,
            classes:
              "bottom-0 w-100 absolute transform -translate-y-12 sm:translate-y-0"
          };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.w-322 {
  @media (max-width: $sm) {
    width: 322px !important;
  }
}

.w-544 {
  @media (max-width: $lg) {
    width: 544px;
  }

  @media (min-width: $lg) {
    width: 662px;
  }
}

h1 {
  font-family: "plus jakarta extra bold";
}
</style>
