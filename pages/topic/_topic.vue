<template>
  <layout :topics="topics" :bannerTitle="topicName">
    <template v-slot:breadcrumbs>
      <breadcrumbs :breadcrumbs="breadcrumbs" hasX class="py-12" />
    </template>
    <template v-slot:content>
      <div class="content grid md:grid-cols-2 gap-5">
        <articlePreview
          v-for="e in articles"
          :key="e.uuid"
          :title="e.content.title"
          :link="'/help-centre/' + e.slug"
        />
      </div>
    </template>
  </layout>
</template>

<script>
const layout = () => import("@/components/HelpCentreLayout");
const breadcrumbs = () => import("@/components/Breadcrumbs");
const articlePreview = () => import("@/components/HelpArticlePreview");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    articlePreview: hydrateWhenVisible(articlePreview),
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
        { href: this.fullCanonicalURL, rel: 'canonical' },
        { href: require('@/assets/images/tag-bg.jpg?webp'), rel: 'preload', as: 'image' },
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
        topic = topic[0]

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

  computed: {
    topicName() {
      return this.topic.content.name;
    }
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style>
</style>