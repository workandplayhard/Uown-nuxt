<template>
  <div class="container grid sm:grid-cols-2 gap-10 mt-10">
    <list :list="list1" :title="title1" :btnOptions="btn1Options" :liDisc="liDisc" />
    <list :list="list2" :title="title2" :btnOptions="btn2Options" :liDisc="liDisc" />
  </div>
</template>

<script>
import List from "../components/List";
export default {
  components: {
    List
  },

  props: {
    title1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    },
    list1: {
      type: Array,
      required: true
    },
    list2: {
      type: Array,
      required: true
    },
    btn1Options: {
      type: Object
    },
    btn2Options: {
      type: Object
    },
    liDisc: {
      type: Boolean
    }
  }
};
</script>

<style lang='scss' scoped>
</style>