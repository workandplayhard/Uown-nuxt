<template>
  <div class="circle absolute rounded-full flex items-center justify-center" :style="circleStyle">
    <span :style="getValueScale">{{ value }}</span>
    <span v-if="has1" class="text-xs transform -translate-y-full -mt-2">1</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
    scale: {
      type: Number,
    },
    has1: {
      type: Boolean,
      default: false
    },
    valueScale: {
      type: Number,
      default: 1
    }
  },

  computed: {
    circleStyle() {
      return {
        backgroundColor: this.bg,
        transform: `scale(${this.scale})`,
      };
    },
    getValueScale() {
      return {
        transform: `scale(${this.valueScale})`
      }
    }
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.circle {
  box-shadow: 7px 4px 15px 0 rgba(0, 0, 0, 0.24);
  text-shadow: 4px -1px 2px rgba(0, 0, 0, 0.1);
  width: 28vh;
  height: 28vh;
  font-size: 9vh;
}

@media (orientation: portrait) and (min-width: $md) {
  .circle {
    width: 20vh;
    height: 20vh;
  }
}
</style>