<template>
  <div
    class="main mt-from-header portrait:py-24 landscape:min-h-minus-header bg-cover bg-right flex items-center relative"
  >
    <div class="container grid sm:grid-cols-2">
      <div>
        <bannerText
          title="How can we help?"
          para="Our Help Centre is built to help answer any questions you might have."
          class="mb-10"
        />
        <!-- <search placeholder="What are you looking for?" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import bannerText from "@/components/BannerText";
// import search from "@/components/Search";

export default {
  components: {
    bannerText,
    // search
  }
};
</script>

<style scoped>
.main {
  background-image: url(~@/assets/images/HELP_HERO.png?webp);
}

.no-webp .main {
  background-image: url(~@/assets/images/HELP_HERO.png);
}
</style>