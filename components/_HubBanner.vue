<template>
  <div
    class="main bg-white mt-from-header bg-contain sm:bg-cover sm:bg-right bg-bottom grid py-10 bg-no-repeat min-h-screen sm:min-h-0"
  >
    <div class="container grid sm:grid-cols-2 items-center">
      <div>
        <bannerText :title="title" :para="para" />
        <!-- <search class="my-8" /> -->
        <filterLinks :categories="categories" />
      </div>
    </div>
  </div>
</template>

<script>
import bannerText from "@/components/BannerText";
// import search from "@/components/Search";
import filterLinks from "@/components/HubFilterLinks";

export default {
  components: {
    bannerText,
    // search,
    filterLinks
  },

  props: {
    title: {
      type: String,
      required: true
    },
    para: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.main {
  background-image: url("~@/assets/images/the-hub.png?webp");
}

.no-webp .main {
  background-image: url("~@/assets/images/the-hub.png");
}

@media (min-width: $sm) {
  .main {
    background-image: url("~@/assets/images/the-hub-desktop.png?webp");
  }

  .no-webp .main {
    background-image: url("~@/assets/images/the-hub-desktop.png");
  }
}
</style>