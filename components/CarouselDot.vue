<template>
  <span class="w-4 h-4 rounded-full inline-block"></span>
</template>

<script>
export default {
  name: "CarouselDot"
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

span {
  background-color: #d0d0d0;

  &.active {
    background-color: $aquamarine;
  }
}
</style>