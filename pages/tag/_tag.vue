<template>
  <div>
    <SearchBanner :title="tag" para="Articles in our Hub filtered by tag." />
    <hubBgContainer>
      <div class="container">
        <breadcrumbs :breadcrumbs="breadcrumbs"  />
        <hubCardsWrapper class="hub-cards">
          <hubCard
            v-for="(post, i) in posts"
            :key="i"
            :title="post.content.title"
            :img="post.content.image.filename"
            :published="new Date(post.published_at)"
            :category="post.content.category"
            :link="'/the-hub/' + post.slug"
          />
        </hubCardsWrapper>
      </div>
      <!-- <h1
        v-else
        class="text-xl md:text-2xl py-8 text-center opacity-75"
      >No articles belong to this category</h1>-->
    </hubBgContainer>
  </div>
</template>

<script>
const SearchBanner = () => import("@/components/SearchBanner");
const hubBgContainer = () => import("@/components/HubBgContainer");
const hubCardsWrapper = () => import("@/components/HubCardsWrapper");
const breadcrumbs = () => import("@/components/Breadcrumbs");
const hubCard = () => import("@/components/HubCard");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    SearchBanner,
    hubBgContainer,
    hubCardsWrapper,
    breadcrumbs,
    hubCard: hydrateWhenVisible(hubCard)
  },

  head() {
    return {
      title: `${this.tag} | Blog Archives`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Articles in our Hub filtered by tag."
        }
      ],
      link: [
        { href: this.fullCanonicalURL, rel: 'canonical' },
        { href: require('@/assets/images/tag-bg.jpg?webp'), rel: 'preload', as: 'image' },
      ]
    };
  },

  asyncData(context) {
    const version = context.isDev ? "draft" : "published";
    let tag;

    return context.app.$storyapi
      .get(`cdn/stories/tag/${context.params.tag}`, {
        version: version
      })
      .then(res => {
        tag = res.data.story.content.name;
        let uuid = res.data.story.uuid;

        return context.app.$storyapi.get(`cdn/stories`, {
          version: version,
          starts_with: "the-hub",
          per_page: 100,
          resolve_relations: "category",
          sort_by: "published_at:desc",
          filter_query: {
            tags: {
              exists: uuid
            }
          }
        });
      })
      .then(res => ({
        posts: res.data.stories,
        tag,
        breadcrumbs: [
          { text: "The Hub", link: "/the-hub/1" },
          { text: "Filtered by Tag:", link: context.route.path },
          { text: tag, link: context.route.path }
        ]
      }))
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({ statusCode: 404, message: 'Failed to receive content form api' })
        } else {
          console.error(res.response.data)
          context.error({ statusCode: res.response.status, message: res.response.data })
        }
      })
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style>
</style>