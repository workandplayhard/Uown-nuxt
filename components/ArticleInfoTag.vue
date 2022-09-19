<template>
  <nuxt-link :to="link" class="link bg-light px-1 text-sm transition-colors duration-200">{{text}}</nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/css/_variables';

.link {
  color: rgb(157, 157, 156);

  &:hover {
    background-color: $darkgray;
    color: #fff;
  }
}
</style>