<template>
  <div>
    <SearchBanner
      title="Search Results"
      para="Can't find what you are looking for? Try other search keywords"
    />
    <div class="bg-light py-12">
      <containerCompact>
        <breadcrumbs :breadcrumbs="breadcrumbs" class="opacity-75 mb-8" />
        <slot></slot>
      </containerCompact>
    </div>
  </div>
</template>

<script>
import SearchBanner from "@/components/SearchBanner";
import breadcrumbs from "@/components/Breadcrumbs";
import containerCompact from "@/components/ContainerCompact";

export default {
  components: {
    SearchBanner,
    breadcrumbs,
    containerCompact
  },

  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>