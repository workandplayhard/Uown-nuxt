<template>
  <div
    class="main h-screen-minus-header sm:grid grid-cols-2 sm:items-center bg-no-repeat bg-contain sm:bg-cover py-10"
  >
    <div class="container">
      <Breadcrumbs
        :breadcrumbs="breadcrumbs"
        class="sm:absolute top-0 left-0 mb-4 sm:container sm:mt-4"
      />
      <BannerText
        title="Property Investments"
        para="The new way to invest in property"
        btnText="View properties"
        btnLink="https://app.uown.co/properties"
        btnOuterLink
        underText="Capital at risk."
      />
    </div>
  </div>
</template>

<script>
import BannerText from "@/components/BannerText";
import breadcrumbList from "@/mixins/breadcrumbList";

export default {
  name: "PropertyInvestmentBanner",
  components: {
    BannerText,
    Breadcrumbs: () => import("@/components/Breadcrumbs"),
  },

  data() {
    return {
      breadcrumbs: [{ text: "Property Investments", link: this.$route.path }],
    };
  },

  mixins: [breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.main {
  background-image: url("~@/assets/images/property-investments-banner.png?webp");
  background-position-y: 50vh;
}

.no-webp .main {
  background-image: url("~@/assets/images/property-investments-banner.png");
}

.container {
  grid-column: 2;
}

@media (min-width: $sm) {
  .main {
    background-image: url("~@/assets/images/property-investments-banner-lg.png?webp");
    background-position-x: 40%;
    background-position-y: unset;
  }

  .no-webp .main {
    background-image: url("~@/assets/images/property-investments-banner-lg.png");
  }
}
</style>