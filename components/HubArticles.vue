<template>
  <div>
    <div class="hidden lg:block">
      <HubCarousel bgColor="#71E5BD" category="Property" />
      <HubCarousel bgColor="#5A6ECC" category="Money" />
      <HubCarousel bgColor="#FFD008" category="Home & Lifestyle" />
      <HubCarousel bgColor="#FE8075" category="Causes" />
    </div>
    <div class="grid lg:hidden md:grid-cols-2 grid-cols-1">
      <HubArticleCard bgColor="#71E5BD" category="Property" />
      <HubArticleCard bgColor="#5A6ECC" category="Money" />
      <HubArticleCard bgColor="#FFD008" category="Home & Lifestyle" />
      <HubArticleCard bgColor="#FE8075" category="Causes" />
    </div>
  </div>
</template>
<script>
import HubCarousel from "./HubCarousel.vue";
import HubArticleCard from "./HubArticleCard.vue";
export default {
  data() {
    return {};
  },
  components: { HubCarousel, HubArticleCard }
};
</script>
