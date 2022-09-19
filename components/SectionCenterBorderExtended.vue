<template>
  <div class="py-20 bg-light">
    <sectionTwo :icon="icon" :title="title"></sectionTwo>
    <centerBorder :content="blocks" titleIsLink />
  </div>
</template>

<script>
import centerBorder from "../components/SectionCenterBorder";
import sectionTwo from "../components/SectionTwo";
export default {
  components: {
    centerBorder,
    sectionTwo
  },

  props: {
    blocks: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>