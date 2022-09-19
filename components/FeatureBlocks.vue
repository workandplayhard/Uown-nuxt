<template>
  <section class="pt-20 bg-light">
    <div class="container">
      <heading :text="title" class="text-center grid-cols-span max-w-lg mx-auto" center />
      <div class="feature-blocks grid gap-6 mx-auto">
        <block
          v-for="(e,i) in blocks"
          :key="i"
          :title="e.title"
          :description="e.description"
          :bgImage="e.bgImage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import block from "@/components/FeatureBlock";

export default {
  components: {
    heading,
    block,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    blocks: {
      type: Array,
      requried: true,
    },
  },
};
</script>

<style scoped>
.feature-blocks {
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
}
</style>