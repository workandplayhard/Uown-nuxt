<template>
  <img :src="src" alt class="icon w-10 h-10 md:w-8 md:h-8 cursor-pointer rounded" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
.icon {
  padding: 0.4rem;
  background-color: darken(gray, 10%);
}
</style>