<template>
  <searchLayout :breadcrumbs='breadcrumbs'>
    <template v-if="helpCentrePosts.length > 0 || topics.length > 0">
      <searchCard
        v-for="post in helpCentrePosts"
        :key="post.uuid"
        :title="post.content.title"
        :summary="post.content.seo_description"
        :link="'/help-centre/' + post.slug"
        class="mb-4"
      />
      <searchCard
        v-for="post in topics"
        :key="post.uuid"
        :title="post.content.name"
        :summary="post.content.seo_description"
        :link="'/topic/' + post.slug"
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
        { text: "Help Center", link: '/help-centre' },
        { text: "Search Results", link: '/search-help' }
      ]
    };
  },

  watchQuery: ["query"],

  asyncData(context) {
    const version = context.isDev ? "draft" : "published";

    const requests = [
      context.app.$storyapi.get(`cdn/stories`, {
        version: version,
        starts_with: "help-centre",
        per_page: 100,
        filter_query: {
          title: {
            like: `*${context.query.query}*`
          }
        }
      }),

      context.app.$storyapi.get(`cdn/stories`, {
        version: version,
        starts_with: "topic",
        per_page: 100,
        filter_query: {
          name: {
            like: `*${context.query.query}*`
          }
        }
      })
    ];

    return Promise.all(requests)
      .then(responses => {
        const helpCentrePosts = responses[0];
        const topics = responses[1];
        return {
          helpCentrePosts: helpCentrePosts.data.stories,
          topics: topics.data.stories
        };
      })
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