<template>
  <div
    :class="{
      'mb-8': !ver2,
      'sm:flex justify-between items-center max-w-3xl mx-auto': ver2,
    }"
  >
    <p
      class="mb-4"
      :class="{ 'uppercase text-xs sm:mb-0 z-1 tracking-wider': ver2 }"
    >
      Filter articles by:
    </p>
    <div
      class="links text-xl space-y-4"
      :class="{ 'ver-2 sm:flex sm:space-y-0': ver2 }"
    >
      <filterLink
        v-for="e in categories.slice().reverse()"
        :key="e.uuid"
        :text="e.content.name"
        :link="e.slug"
        :bg="e.content.color"
        :ver2="ver2"
      />
    </div>
  </div>
</template>

<script>
import filterLink from "@/components/HubFilterLink";

export default {
  components: {
    filterLink,
  },

  props: {
    ver2: {
      type: Boolean,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.filter-link {
  &.nuxt-link-active {
    font-family: "plus jakarta bold";
  }
}
</style>