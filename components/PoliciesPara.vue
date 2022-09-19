<template>
  <p class="p text-darkgray" v-interpolation v-html="text"></p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped>
.p {
  font-size: 1.1rem;
}
</style>