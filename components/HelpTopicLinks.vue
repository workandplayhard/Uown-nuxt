<template>
  <div class="flex flex-col space-y-6 background">
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

<style lang="scss" scoped>
.background {
  height: 550px;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px rgba(0, 0, 0, 0.05) !important;
}
</style>
