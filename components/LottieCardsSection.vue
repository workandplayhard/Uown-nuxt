<template>
  <div class="bg-light py-12 sm:py-24">
    <div class="container text-center">
      <h1 class="text-3xl font-family-bold mb-16 text-gray-900" v-html="title"></h1>
      <div class="grid gap-5 grid-cols-2 lg:grid-cols-4 justify-center">
        <LottieCard v-for="(e, i) in cardsContent" :key='i' :text='e.text' :animationData='e.animationData' />
      </div>
    </div>
  </div>
</template>

<script>
import LottieCard from "../components/LottieCard";
export default {
  name: "LottieCardsSection",
  components: {
    LottieCard
  },

  props: {
    title: {
      type: String,
      required: true
    },
    cardsContent: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>