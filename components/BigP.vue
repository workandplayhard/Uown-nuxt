<template>
  <p class="text-2xl md:text-3xl mb-4" v-html="text"></p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>