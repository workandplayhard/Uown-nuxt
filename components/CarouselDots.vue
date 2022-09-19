<template>
  <!-- moved the dots up in mobile (from -translate-y-6 to -translate-y-24) so that they will be visible despite the existance of address bar -->
  <div
    class="
      dots
      grid grid-flow-col
      gap-5
      items-center
      absolute
      bottom-0
      left-1/2
      transform
      -translate-x-1/2 -translate-y-24
      z-1
      sm:grid-flow-row
      sm:top-1/2
      sm:-translate-y-1/2
    "
    :class="{
      'sm:left-0 sm:translate-x-8': left,
      'sm:right-0 sm:left-auto sm:-translate-x-8': !left,
    }"
    :style="{ maxHeight: `${slidesLength * 2.2}rem` }"
  >
    <dot
      v-for="e in slidesLength"
      :key="e"
      :class="{ active: e == currentSlide + 1 }"
      @click.native="goToSlide({ index: e - 1, carouselName })"
    />
  </div>
</template>

<script>
import dot from "@/components/CarouselDot";

export default {
  components: {
    dot,
  },

  props: {
    slidesLength: {
      type: Number,
      required: true,
    },
    currentSlide: {
      type: Number,
      required: true,
    },
    carouselName: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
    },
    store: {
      type: String,
    },
  },

  methods: {
    goToSlide(payload) {
      let store;
      if (this.store) store = `${this.store}/`;
      else store = "";
      this.$store.commit(`${store}goToSlide`, payload);
    },
  },
};
</script>

<style>
</style>