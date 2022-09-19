<template>
  <h1
    class="text-4xl md:text-5xl leading-tight"
    :class="{ 'font-family-bold': !notBold }"
  >
    {{ text }}
  </h1>
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
  },
};
</script>

<style>
</style>