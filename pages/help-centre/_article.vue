<template>
  <layout :topics="topics" :bannerTitle="topic.content.name">
    <template v-slot:breadcrumbs>
      <breadcrumbs
        :breadcrumbs="breadcrumbs"
        idProp="faq-question"
        class="py-12"
      />
    </template>
    <template v-slot:content>
      <articleContent
        :text="content"
        :textHTML="article.content.content_html"
        id="faq-answer"
      />
      <hr />
      <h1
        v-if="relatedArticles.length > 0"
        class="text-2xl opacity-60 mt-10 mb-6"
      >
        Related help articles:
      </h1>
      <div
        v-if="relatedArticles.length > 0"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
      >
        <articlePreview
          v-for="e in relatedArticles.slice(0, 6)"
          :key="e.uuid"
          :title="e.content.title"
          :link="'/help-centre/' + e.slug"
        />
      </div>
      <haveQuestions />
    </template>
  </layout>
</template>

<script>
const layout = () => import("@/components/HelpCentreLayout");
const breadcrumbs = () => import("@/components/Breadcrumbs");
const articleContent = () => import("@/components/ArticleContent");
const articlePreview = () => import("@/components/HelpArticlePreview");
const haveQuestions = () => import("@/components/HaveQuestions");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    layout,
    breadcrumbs,
    articleContent,
    articlePreview: hydrateWhenVisible(articlePreview),
    haveQuestions,
  },

  head() {
    return {
      title: this.article.content.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.content.seo_description,
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        { href: require('@/assets/images/tag-bg.jpg?webp'), rel: 'preload', as: 'image' },
      ],
    };
  },

  asyncData(context) {
    let topics, article, topic, content;

    return context.app.$storyapi
      .get("cdn/stories/", {
        version: context.isDev ? "draft" : "published",
        starts_with: "topic",
        sort_by: "content.order:asc",
      })
      .then((res) => {
        topics = res.data.stories;

        return context.app.$storyapi.get(
          `cdn/stories/help-centre/${context.params.article}`,
          {
            version: context.isDev ? "draft" : "published",
          }
        );
      })
      .then((res) => {
        article = res.data.story;
        res.data.story.content.content
          ? (content = res.data.story.content.content)
          : (content = {});

        topic = topics.filter((e) => e.uuid == article.content.topic);
        topic = topic[0];

        return context.app.$storyapi.get("cdn/stories/", {
          version: context.isDev ? "draft" : "published",
          starts_with: "help-centre",
          per_page: 7,
          filter_query: {
            topic: {
              in: topic.uuid,
            },
          },
        });
      })
      .then((res) => ({
        topics,
        article,
        topic,
        relatedArticles: res.data.stories.filter((e) => e.uuid != article.uuid),
        content,
        breadcrumbs: [
          { text: "Help Centre", link: "/help-centre" },
          { text: topic.content.name, link: `/topic/${topic.slug}` },
          { text: article.content.title, link: context.route.path },
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
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style>
</style>