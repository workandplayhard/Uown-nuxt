<template>
  <div class="container text-center flex flex-col items-center mx-auto space-y-4 py-6">
    <img :src="icon" alt class="w-40" />
    <heading :text='title' class="max-w-4xl" />
    <slot></slot>
  </div>
</template>

<script>
import heading from '../components/Heading'

export default {
  components: {
    heading
  },

  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

p {
  font-size: 1.25rem;
  max-width: 42rem;

  a {
    color: $text-link;
    font-style: italic;
  }
}
</style>