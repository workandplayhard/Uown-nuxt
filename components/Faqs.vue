<template>
  <div class="container py-6 max-w-2xl">
    <heading :text='title' class="mb-5 text-center" />
    <Faq v-for="(e, index) in faqs" :key="index" :question="e.question" :answer="e.answer" />
  </div>
</template>

<script>
import Faq from "../components/Faq";
import heading from '../components/Heading'

export default {
  components: {
    Faq,
    heading
  },

  props: {
    title: {
      type: String,
      required: true
    },
    faqs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>