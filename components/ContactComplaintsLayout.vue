<template>
  <div class="main bg-light mt-from-header py-20 bg-no-repeat">
    <Breadcrumbs :breadcrumbs="breadcrumbs" class="container transform -translate-y-16" />
    <div class="max-w-3xl px-6 mx-auto">
      <h1 class="text-5xl md:text-6xl opacity-60 text-center">{{ title }}</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    Breadcrumbs: () => import("@/components/Breadcrumbs"),
  },

  props: {
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      breadcrumbs: [ { text: this.title, link: this.$route.path } ]
    }
  },

  mixins: [breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style scoped>
.main {
  background-image: url(~@/assets/images/ellipse-aquamarine.svg);
  background-size: 84%;
  background-position: -42vw -42vw;
}

@media (orientation: landscape) {
  .main {
    background-size: 60%;
    background-position: -35vw -35vw;
  }
}
</style>