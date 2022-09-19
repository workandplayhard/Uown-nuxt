<template>
  <div class="bg-light py-20">
    <div class="container flex flex-col items-center text-center">
      <sectionTwo :icon="mainIcon" :title='title'>
        <p class="text-xl max-w-2xl">{{para}}</p>
      </sectionTwo>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-12 w-full mt-16">
        <IconTitleText
          v-for="(e, index) in cards"
          :key="index"
          :title="e.title"
          :text="e.text"
          :link="e.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconTitleText from "../components/IconTitleText";
import sectionTwo from '../components/SectionTwo';

export default {
  components: {
    IconTitleText,
    sectionTwo
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
    },
  }
};
</script>

<style lang='scss' scoped>
</style>