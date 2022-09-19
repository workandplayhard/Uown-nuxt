<template>
  <div class="container py-6 max-w-2xl">
    <heading :text="title" class="mb-8" />
    <p class="text-xl" v-html="para"></p>
  </div>
</template>

<script>
import heading from "../components/Heading";

export default {
  components: {
    heading
  },

  props: {
    title: {
      type: String,
      required: true
    },
    para: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
</style>