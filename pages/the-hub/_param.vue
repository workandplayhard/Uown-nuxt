<template>
  <div>
    <HubTopicBanner :category="category" />
    <HubTopicArticles :category="category" />
    <HubJourney />
  </div>
</template>
<script>
import HubTopicBanner from "~/components/HubTopicBanner.vue";
import HubTopicArticles from "~/components/HubTopicArticles.vue";
import HubJourney from "~/components/HubJourney.vue";
export default {
  mounted() {
    this.category = this.$route.params.param;
  },
  data() {
    return {
      category: ""
    };
  },
  components: { HubTopicBanner, HubTopicArticles, HubJourney }
};
</script>
