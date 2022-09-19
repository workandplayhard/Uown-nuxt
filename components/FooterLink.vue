<template>
  <div>
    <nuxt-link v-if='!outerLink' :to='link' :class='classes'>{{text}}</nuxt-link>
    <a v-else :href='link' :class='classes' target="_blank" rel="noreferrer">{{text}}</a>
  </div>
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
    },
    outerLink: {
      type: Boolean
    }
  },

  computed: {
    classes: () =>
      "link text-white opacity-75 hover:opacity-100 border-b border-transparent transition duration-300"
  }
};
</script>

<style lang='scss' scoped>
.link {
  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
}
</style>