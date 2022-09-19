<template>
  <NLink v-if='!newTab' :to='link' :class='classes'>{{text}}</NLink>
  <a v-else :href='link' target='_blank' :class='classes' rel="noreferrer">{{text}}</a>
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
    newTab: {
      type: Boolean
    },
    underline: {
      type: Boolean
    },
  },

  computed: {
    classes() {
      return {
        'link opacity-60 hover:opacity-50 border-b border-transparent transition duration-300 pb-1': !this.underline,
        'link opacity-60 hover:opacity-50 border-b border-gray-400 transition duration-300 pb-1': this.underline,
      }
    },
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.link {
  &:hover {
    border-color: rgba(0, 0, 0, 0.6);
  }
}

.nuxt-link-active {
  color: $aquamarine;
  border-color: $aquamarine;
  opacity: 1;
}
</style>