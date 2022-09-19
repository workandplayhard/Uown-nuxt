<template>
  <div class="flex flex-col space-y-6">
    <arrowLink
      v-for="topic in topics"
      :key="topic.uuid"
      :text="topic.content.name"
      :link="'/topic/' + topic.slug"
    />
  </div>
</template>

<script>
import arrowLink from "@/components/ArrowLink";

export default {
  components: {
    arrowLink
  },

  props: {
    topics: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>