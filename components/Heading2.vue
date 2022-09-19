<template>
  <h1
    :class="{ 'font-family-bold': !notBold, 'text-4xl md:text-5xl': size=='', 'text-2xl md:text-3xl': size=='sm','text-3xl md:text-4xl': size=='md', 'text-4xl sm:text-5xl md:text-6xl': size=='lg' }"
  >{{text}}</h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    notBold: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
      validator: (value) => ["", "sm", "md", "lg"].indexOf(value) !== -1,
    },
  },
};
</script>

<style>
</style>
