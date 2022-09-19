<template>
  <nuxt-link :to="link" class="link flex items-center opacity-75 link-underlined">{{text}}</nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "#"
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
.link {
  &::before {
    content: '';
    width: .5rem;
    height: .5rem;
    margin-right: .4rem;
    background-image: url('~@/assets/images/next.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>