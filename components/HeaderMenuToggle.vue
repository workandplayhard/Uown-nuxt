<template>
  <div class="menu-toggle flex flex-col lg:hidden z-1" :class="{ active }">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.bar {
  height: 3px;
  width: 25px;
  border-radius: 3px;
  transition: background-color 0.5s;

  &:nth-child(2) {
    margin: 5px 0;
  }
}

.menu-toggle {
  $transition: 0.5s;
  transition: transform $transition;
  $translate-x: -1px;
  $translate-y: 12.5px;
  top: 25px;
  position: absolute;
  right: 10px;

  .bar {
    transition: opacity $transition, transform $transition;
  }

  &:not(.active) .bar {
    background-color: black;
  }

  &.active {
    transform: translateX(10px);

    .bar {
      background-color: white;

      &:first-child {
        transform: rotate(45deg) translate($translate-x, $translate-y);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        transform: rotate(315deg) translate($translate-x, -$translate-y);
      }
    }
  }
}
</style>
