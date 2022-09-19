<template>
  <div class="py-20">
    <div class="container flex flex-col items-center text-center">
      <img :src="mainIcon" alt class="w-40" />
      <h1 class="font-family-bold text-4xl md:text-5xl my-3 max-w-4xl">{{title}}</h1>
      <p class="text-xl max-w-2xl">{{para}}</p>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-12 w-full mt-16">
        <IconTitleText
          v-for="(e, index) in cards"
          :key="index"
          :title="e.title"
          :text="e.text"
          :icon="e.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconTitleText from "../components/IconTitleText";
export default {
  components: {
    IconTitleText
  },

  props: {
    mainIcon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    para: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>