<template>
  <div>
    <layout
      :topics="topics"
      bannerTitle="How can we help"
      subTitle="The Hub is our knowledge centre featuring useful and inspirational articles to help you."
    >
      <template v-slot:heading>
        <span class="font-bold text-5xl">The Help Centre</span>
      </template>
      <template v-slot:content>
        <div class="content lg:grid-cols-3 gap-5 lg:grid hidden">
          <articlePreview
            v-for="e in articles"
            :key="e.uuid"
            :title="e.content.title"
            :link="'/help-centre/' + e.slug"
          />
        </div>
      </template>
      <template v-slot:category>
        <div
          class="content sm:grid-cols-1 md:grid-cols-2 gap-5 sm:grid lg:hidden"
        >
          <categoryPreview
            v-for="(e, index) in topics"
            :key="e.uuid"
            :title="e.name"
            :link="'/help-centre/' + e.slug"
            :inde="index"
          />
        </div>
      </template>
    </layout>
    <div class="article">
      <span class="article-heading">Most Popular Articles</span>
      <articleCarousel class="lg-display" />
      <mdArticleCarousel class="md-display" />
    </div>

    <div class="anymore">
      <anymore />
    </div>
  </div>
</template>

<script>
const layout = () => import("@/components/HelpCentreLayout");
const breadcrumbs = () => import("@/components/Breadcrumbs");
const articlePreview = () => import("@/components/HelpArticlePreview");
const categoryPreview = () => import("@/components/HelpCategoryPreview");
const articleCarousel = () => import("@/components/ArticleCarousel.vue");
const mdArticleCarousel = () => import("@/components/MdArticleCarousel.vue");
const anymore = () => import("@/components/Anymore.vue");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import { hydrateWhenVisible } from "vue-lazy-hydration";
import breadcrumbList from "@/mixins/breadcrumbList";

export default {
  components: {
    articlePreview: hydrateWhenVisible(articlePreview),
    categoryPreview: hydrateWhenVisible(categoryPreview),
    articleCarousel: hydrateWhenVisible(articleCarousel),
    mdArticleCarousel: hydrateWhenVisible(mdArticleCarousel),
    anymore: hydrateWhenVisible(anymore),
    breadcrumbs,
    layout
  },

  head() {
    return {
      title: `${this.topicName} | Help Centre`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.topic.content.seo_description
        }
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/bg-help-landing.png"),
          rel: "preload",
          as: "image"
        }
      ]
    };
  },

  asyncData(context) {
    let topics, topic;
    const version = context.isDev ? "draft" : "published";

    return context.app.$storyapi
      .get("cdn/stories/", {
        version: version,
        starts_with: "topic",
        per_page: 100,
        sort_by: "content.order:asc"
      })
      .then(res => {
        topics = res.data.stories;
        topic = res.data.stories.filter(
          topic => topic.slug == context.params.topic
        );
        topic = topics[0];

        return context.app.$storyapi.get("cdn/stories/", {
          version: version,
          starts_with: "help-centre",
          per_page: 100,
          filter_query: {
            topics: {
              exists: topic.uuid
            }
          }
        });
      })
      .then(res => ({
        topics,
        topic,
        articles: res.data.stories,
        breadcrumbs: [
          { text: "Help Centre", link: "/help-centre" },
          { text: "Article Category:", link: context.route.path },
          { text: topic.content.name, link: "/help-centre" }
        ]
      }))
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  },

  computed: {
    topicName() {
      return this.topic.content.name;
    }
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";
.article {
  height: 920px;
  background-image: url(~@/assets/images/bg-help-article-landing.png?webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
}

.article-heading {
  font-family: "Plus Jakarta";
  font-style: Bold;
  font-size: 48px;
  line-height: 52px;
  line-height: 86%;
  text-align: Center;
  color: #1d1d1b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15rem;
  padding-bottom: 7rem;
}

.lg-display {
  @media (min-width: $lg) {
    display: block;
  }

  @media (max-width: $lg) {
    display: none;
  }
}

.md-display {
  @media (min-width: $lg) {
    display: none;
  }

  @media (max-width: $lg) {
    display: block;
  }
}
</style>
