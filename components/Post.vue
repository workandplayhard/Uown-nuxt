<template>
  <nuxt-link :to='link' class="shadow-md bg-white rounded">
    <img :src="thumbnail" alt="" class="w-full h-64">
    <div class="p-4 space-y-2">
      <h1 class="text-xl font-family-bold">{{title}}</h1>
      <p class="mb-0">{{previewText}}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang='scss' scoped>

</style>