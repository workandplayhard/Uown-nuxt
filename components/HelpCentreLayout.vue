<template>
  <div>
    <searchBanner :title="bannerTitle" />
    <div class="bg-light pb-12">
      <div class="container">
        <div>
          <slot name="breadcrumbs"></slot>
        </div>
        <div class="links-content grid gap-y-8 gap-x-5">
          <div>
            <bigP text="Help Topics" />
            <links class="links" :topics='topics' />
          </div>
          <div>
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchBanner from "@/components/SearchBanner";
import links from "@/components/HelpTopicLinks";
import bigP from "@/components/BigP";

export default {
  components: {
    searchBanner,
    links,
    bigP
  },

  props: {
    topics: {
      type: Array,
      required: true
    },
    bannerTitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.links {
  grid-row: 2;
}

.content {
  grid-row: 1;
}

@media (min-width: $sm) {
  .links,
  .content {
    grid-row: unset;
  }

  .links-content {
    grid-template-columns: 1fr 2.5fr;
  }
}
</style>