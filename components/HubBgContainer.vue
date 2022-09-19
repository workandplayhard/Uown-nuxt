<template>
  <div class="bg-container bg-light relative py-16 overflow-hidden">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-container::before {
  content: "";
  background-image: url(~@/assets/images/W-white.svg);
  position: absolute;
  top: 0;
  bottom: 0;
  right: -25%;
  background-repeat: no-repeat;
  transform: rotate(103deg);
  background-size: 75% 75%;
  background-position-x: center;
  width: 80%;
  height: 80%;
  min-height: 800px;
  min-width: 800px;
}
</style>