<template>
  <div>
    <HubBanner />
    <HubArticles />
    <HubJourney />
  </div>
</template>

<script>
import HubBanner from "@/components/HubBanner.vue";
import HubArticles from "~/components/HubArticles.vue";
import HubJourney from "~/components/HubJourney.vue";

export default {
  components: {
    HubBanner,
    HubArticles,
    HubJourney
  }
  // causes 404 on localhost but works when deployed
  // beforeRouteEnter(to, from, next) {
  //   // next('/the-hub/1');
  // }
};
</script>

<style></style>
