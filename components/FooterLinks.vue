<template>
  <div class="title-and-links md:space-y-3">
    <h1 v-if="!titleLink" class="text-white opacity-50 uppercase mb-2">{{title}}</h1>
    <nuxt-link v-else :to="titleLink" class="text-white opacity-50 uppercase mb-2">{{title}}</nuxt-link>
    <div class="sm:grid grid-cols-2 gap-y-2 gap-x-6 lg:block space-y-2">
      <footerLink v-for="(e, i) in links" :key="i" :link="e.link" :text="e.text" :outerLink='e.outerLink' />
    </div>
  </div>
</template>

<script>
import footerLink from "@/components/FooterLink";

export default {
  components: {
    footerLink
  },

  props: {
    title: {
      type: String,
      required: true
    },
    titleLink: {
      type: String
    },
    links: {
      type: Array,
      required: true
    },
  },
};
</script>

<style></style>