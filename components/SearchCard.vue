<template>
  <nuxt-link :to="link" class="main bg-white p-3 block shadow-sm">
    <h1 class="h1 text-xl font-family-bold mb-1">{{title}}</h1>
    <p class="p">{{summary}}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
.h1,
.p {
  opacity: 0.6;
  transition: opacity 200ms;
}

.main:hover {
  .h1,
  .p {
    opacity: 1;
  }
}
</style>