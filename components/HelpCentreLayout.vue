<template>
  <div>
    <searchBanner :title="bannerTitle" :para="subTitle" />
    <div class="bg-light pb-12">
      <div class="container">
        <div>
          <slot name="breadcrumbs"></slot>
        </div>
        <div class="text-center py-10">
          <slot name="heading"></slot>
        </div>
        <div class="links-content lg:grid lg:gap-y-8 lg:gap-x-5">
          <div class="hidden lg:grid">
            <links class="links" :topics="topics" />
          </div>
          <div class="hidden lg:grid">
            <slot name="content"></slot>
          </div>
          <div class="grid">
            <slot name="category"></slot>
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
    subTitle: {
      type: String
    },
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

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.links {
  grid-row: 2;
}

.content {
  grid-row: 1;
}

.heading {
  font-family: "Plus Jakarta bold";
  // line-height: 86%;
  margin: auto;
  color: #1d1d1b;
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
