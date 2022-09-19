<template>
  <div>
    <banner />
    <div class="bg-light py-12">
      <containerCompact>
        <breadcrumbs :breadcrumbs="breadcrumbs" class="mb-12" />
        <div class="cards grid gap-5">
          <card
            v-for="e in topics"
            :key="e.uuid"
            :title="e.content.name"
            :icon="e.content.icon.filename"
            :link="'/topic/' + e.slug"
          />
        </div>
      </containerCompact>
    </div>
  </div>
</template>

<script>
const banner = () => import("@/components/HelpCentreBanner");
const containerCompact = () => import("@/components/ContainerCompact");
const breadcrumbs = () => import("@/components/Breadcrumbs");
const card = () => import("@/components/HelpCentreCard");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    banner,
    containerCompact,
    breadcrumbs,
    card: hydrateWhenVisible(card)
  },

  head() {
    return {
      title: "Help Centre and FAQs",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "All of your questions about UOWN&#x27;s property crowdfunding platform answered. Click to read our help centre articles and FAQs."
        }
      ],
      link: [
        { href: this.fullCanonicalURL, rel: 'canonical' },
        { href: require('@/assets/images/HELP_HERO.png?webp'), rel: 'preload', as: 'image' }
      ]
    };
  },

  data() {
    return {
      breadcrumbs: [
        { text: "Help Centre", link: "/help-centre" },
        { text: "Overview", link: "/help-centre" }
      ]
    };
  },

  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: context.isDev ? "draft" : "published",
        starts_with: "topic",
        per_page: 100,
        sort_by: "content.order:asc"
      })
      .then(res => ({
        topics: res.data.stories
      }));
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style scoped>
.cards {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>