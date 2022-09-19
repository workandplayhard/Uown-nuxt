<template>
  <searchLayout :breadcrumbs="breadcrumbs">
    <template v-if="posts.length > 0">
      <searchCard
        v-for="post in posts"
        :key="post.uuid"
        :title="post.content.title"
        :summary="post.content.summary"
        :link="'/the-hub/' + post.slug"
        class="mb-4"
      />
    </template>
    <p v-else class="text-lg opacity-60">No matching results.</p>
  </searchLayout>
</template>

<script>
const searchLayout = () => import("@/components/SearchLayout");
const searchCard = () => import("@/components/SearchCard");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    searchLayout,
    searchCard
  },

  head() {
    return {
      title: "Search Results",
      link: [ { href: this.fullCanonicalURL, rel: 'canonical' } ]
    };
  },

  data() {
    return {
      breadcrumbs: [
        { text: "The Hub", link: "/the-hub/1" },
        { text: "Search Results", link: '/search-hub' }
      ]
    };
  },

  watchQuery: ["query"],

  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: context.isDev ? "draft" : "published",
        starts_with: "the-hub",
        per_page: 100,
        filter_query: {
          title: {
            like: `*${context.query.query}*`
          }
        }
      })
      .then(res => ({
        posts: res.data.stories
      }))
      .catch(errors => {
        console.error(errors);
      });
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style>
</style>