<template>
  <div id="main">
    <hubBanner
      :title="category.content.name"
      para="Articles in our Hub categoryed by category."
      :categories="categories"
    />
    <hubBgContainer>
      <div class="container">
        <breadcrumbs :breadcrumbs="breadcrumbs" hasX />
        <hubCardsWrapper class="hub-cards">
          <hubCard
            v-for="(post, i) in posts"
            :key="i"
            :title="post.content.title"
            :img="post.content.image.filename"
            :published="new Date(post.published_at)"
            :category="category"
            :thumbnailWidth="510"
            :link="'/the-hub/' + post.slug"
          />
        </hubCardsWrapper>
        <pagination
          :link="'/category/' + $route.params.category"
          :total="pageCount"
          class="mt-4"
          :current="parseInt($route.params.pageNumber)"
        />
      </div>
      <!-- <h1
        v-else
        class="text-xl md:text-2xl py-8 text-center opacity-75"
      >No articles belong to this category</h1>-->
    </hubBgContainer>
  </div>
</template>

<script>
const hubBanner = () => import("@/components/HubBanner");
const hubCard = () => import("@/components/HubCard");
const hubBgContainer = () => import("@/components/HubBgContainer");
const hubCardsWrapper = () => import("@/components/HubCardsWrapper");
const breadcrumbs = () => import("@/components/Breadcrumbs");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    hubBanner,
    hubCard: hydrateWhenVisible(hubCard),
    hubBgContainer,
    hubCardsWrapper,
    breadcrumbs,
    pagination: () => import("@/components/Pagination"),
  },

  head() {
    return {
      title: `${this.category.content.name} Posts | Page ${this.$route.params.pageNumber}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `UOWN Hub Articles: ${this.category.content.name}`,
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/the-hub.png?webp"),
          rel: "preload",
          as: "image",
          media: "(max-width: 639px)",
        },
        {
          href: require('@/assets/images/the-hub-desktop.png?webp'),
          rel: "preload",
          as: "image",
          media: "(min-width: 640px)",
        },
      ],
    };
  },

  asyncData(context) {
    const version = context.isDev ? "draft" : "published";
    let categories, category;

    return context.app.$storyapi
      .get(`cdn/stories`, {
        version: version,
        starts_with: "category",
      })
      .then((res) => {
        categories = res.data.stories;
        category = categories.filter((e) => e.slug == context.params.category);
        category = category[0];

        if(!category)
          return context.error({ statusCode: 404 })

        return context.app.$storyapi
          .get(`cdn/stories`, {
            version: version,
            starts_with: "the-hub",
            per_page: 16,
            page: context.params.pageNumber,
            sort_by: "published_at:desc",
            filter_query: {
              category: {
                in: category.uuid,
              },
            },
          })
          .then((res) => ({
            posts: res.data.stories,
            categories,
            category,
            pageCount: res.total / res.perPage,
            breadcrumbs: [
              { text: "The Hub", link: "/the-hub/1" },
              { text: 'Filtered by Category:' },
              { text: category.content.name, link: '/the-hub/1' },
            ],
          }))
          .catch((res) => {
            if (!res.response) {
              console.error(res);
              context.error({
                statusCode: 404,
                message: "Failed to receive content form api",
              });
            } else {
              console.error(res.response.data);
              context.error({
                statusCode: res.response.status,
                message: res.response.data,
              });
            }
          });
      });
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style scoped>
</style>