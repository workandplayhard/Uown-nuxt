<template>
  <div class="main min-h-minus-header items-center rtl bg-no-repeat bg-bottom sm:flex py-16 relative">
    <Breadcrumbs :breadcrumbs="breadcrumbs" class="absolute top-0 left-0 container mt-4" />
    <div class="sm:grid grid-cols-2 gap-5 container">
      <BannerText :title="title" :para="para" :btnText="btnText" :btnLink="btnLink" class="text" />
    </div>
  </div>
</template>

<script>
import BannerText from "../components/BannerText";
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    BannerText,
    Breadcrumbs: () => import('@/components/Breadcrumbs')
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
    btnText: {
      type: String
    },
    btnLink: {
      type: String
    }
  },

  data() {
    return {
      breadcrumbs: [ { text: 'Ethos', link: this.$route.path } ]
    }
  },

  mixins: [breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.content {
  z-index: 1;
}

.main {
  background-image: url(~@/assets/images/ethos-hero-mobile.png?webp);
  background-size: 100%;
}

.no-webp .main {
  background-image: url(~@/assets/images/ethos-hero-mobile.png);
}

@media (min-width: $sm) {
  .main {
    background-image: url(~@/assets/images/ethos-hero.png?webp);
    background-position: 30%;
    background-size: cover;
  }

  .text {
    grid-column: 2;
  }

  .no-webp .main {
    background-image: url(~@/assets/images/ethos-hero.png);
  }
}
</style>