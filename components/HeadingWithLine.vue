<template>
  <div>
    <heading :text="text" class="text-darkgray" :class="{ 'text-center': center }" notBold size="sm" />
    <div class="x-line my-10" :class="{ 'mx-auto': center }"></div>
  </div>
</template>

<script>
import heading from "@/components/Heading2";

export default {
  components: {
    heading,
  },

  props: {
    text: {
      type: String,
      required: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>