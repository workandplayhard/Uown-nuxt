<template>
  <div id="main" v-if="mainPage">
    <hubBanner
      title="The Hub"
      para="The Hub is our Knowledge Center featuring useful and inspirational articles."
      :categories="categories"
    />
    <hubBgContainer>
      <div class="container">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <hubCardsWrapper class="hub-cards">
          <hubCard
            v-for="(post, i) in posts"
            :key="i"
            :title="post.content.title"
            :img="post.content.image.filename"
            :published="new Date(post.published_at)"
            :category="post.content.category"
            :thumbnailWidth="510"
            :link="'/the-hub/' + post.slug"
          />
        </hubCardsWrapper>
        <pagination link="/the-hub" :total="pageCount" class="mt-4" :current="parseInt($route.params.param)" />
        
      </div>
      <!-- <h1
        v-else
        class="text-xl md:text-2xl py-8 text-center opacity-75"
      >No articles belong to this category</h1>-->
    </hubBgContainer>
  </div>
  <div v-else>
    <Articlebanner
      :title="title"
      :summary="summary"
      :published="new Date(published)"
      :author="author"
      :tags="tags"
      :img="img"
    />
    <div style="background-color: #f6f6f1" class="pt-24">
      <div class="max-w-4xl mx-auto px-6 lg:px-0">
        <breadcrumbs :breadcrumbs="breadcrumbs" ver2 :color="category.content.color" />
        <articleContent :text="bodyText" :textHTML="bodyTextHTML" />
      </div>
    </div>
    <div style="background-color: #f0f0e7">
      <div class="container py-24">
        <h1 class="text-2xl md:text-4xl mb-4 opacity-60 text-center">Other articles you might like</h1>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <hubCard
            v-for="(post, i) in posts.slice(0,6)"
            :key="i"
            :title="post.content.title"
            :img="post.content.image.filename"
            :published="new Date(post.published_at)"
            :category="category"
            :link="'/the-hub/' + post.slug"
          />
        </div>
      </div>
      <div class="section-bottom relative overflow-hidden text-center mt-24 pb-24">
        <img
          src="@/assets/images/rounded-box-aquamarine.svg"
          alt
          class="bg absolute hidden sm:block"
        />
        <div class="container space-y-12">
          <h1 class="text-4xl sm:text-5xl md:text-6xl opacity-60 leading-none">Search our Hub</h1>
          <p
            class="text-xl sm:text-2xl opacity-50 max-w-sm mx-auto"
          >The Hub is our Knowledge Center featuring useful and inspirational articles.</p>
          <!-- <search ver2 /> -->
          <filterLinks ver2 :categories="categories" class="text-left relative" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const hubBanner = () => import("@/components/HubBanner");
const hubCard = () => import("@/components/HubCard");
const hubBgContainer = () => import("@/components/HubBgContainer");
const hubCardsWrapper = () => import("@/components/HubCardsWrapper");
const breadcrumbs = () => import("@/components/Breadcrumbs");
import fullCanonicalURL from '@/mixins/fullCanonicalURL'

const Articlebanner = () => import("@/components/ArticleBanner");
// const search = () => import("@/components/Search");
const filterLinks = () => import("@/components/HubFilterLinks");
const articleContent = () => import("@/components/ArticleContent");
import { hydrateWhenVisible } from 'vue-lazy-hydration'
import breadcrumbList from '~/mixins/breadcrumbList';

export default {
  components: {
    hubBanner,
    hubCard: hydrateWhenVisible(hubCard),
    hubBgContainer,
    hubCardsWrapper,
    breadcrumbs,
    pagination: () => import('@/components/Pagination'),

    Articlebanner,
    // search,
    filterLinks,
    articleContent
  },

  data() {
    return {
      breadcrumbs: [
        { text: "The Hub", link: '/the-hub/1' },
        { text: "All Articles", link: '/the-hub/1' }
      ],
    };
  },

  head() {
    return {
      title: this.headContent.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.headContent.description
        }
      ],
      link: [ { href: this.fullCanonicalURL, rel: 'canonical' }, this.imagesToPreload[0], this.imagesToPreload[1] ],
      script: [this.articleSchema]
    };
  },

  asyncData(context) {
    const version = context.isDev ? "draft" : "published";
    const requests = [
      context.app.$storyapi.get(`cdn/stories`, {
        version: version,
        starts_with: 'the-hub',
        resolve_relations: 'category',
        per_page: 16,
        page: context.params.param,
        sort_by: "published_at:desc"
      }),
      context.app.$storyapi.get(`cdn/stories`, {
        version: version,
        starts_with: "category"
      })
    ];

    if(/^\d+$/.test(context.params.param)) {
      return Promise.all(requests)
      .then(responses => {
        const posts = responses[0];
        const categories = responses[1];

        return {
          posts: posts.data.stories,
          categories: categories.data.stories,
          pageCount: posts.total / posts.perPage,
          mainPage: true,
        };
      })
      .catch(errors => {
        console.error(errors);
      });
    }

    else {
      let categories,
      img,
      title,
      summary,
      published,
      bodyText,
      bodyTextHTML,
      author,
      category,
      tags,
      firstPublished,
      articleUUID;

    return context.app.$storyapi
      .get(`cdn/stories`, {
        version: version,
        starts_with: "category"
      })
      .then(res => {
        categories = res.data.stories;

        return context.app.$storyapi.get(
          `cdn/stories/the-hub/${context.params.param}`,
          {
            version: version,
            resolve_relations: "tags,author,category"
          }
        );
      })
      .then(res => {
        img = res.data.story.content.image.filename;
        title = res.data.story.content.title;
        summary = res.data.story.content.summary;
        published = res.data.story.published_at;
        bodyTextHTML = res.data.story.content.body_text_html;
        author = res.data.story.content.author.content.name;
        category = res.data.story.content.category;
        tags = res.data.story.content.tags;
        firstPublished = res.data.story.first_published_at

        res.data.story.content.body_text
          ? (bodyText = res.data.story.content.body_text)
          : (bodyText = {});

        articleUUID = res.data.story.uuid;

        return context.app.$storyapi.get(`cdn/stories`, {
          version: version,
          starts_with: "the-hub",
          per_page: 7,
          filter_query: {
            category: {
              in: category.uuid
            }
          }
        });
      })
      .then(res => {
        let posts = res.data.stories.filter(post => post.uuid != articleUUID);
        return {
          categories,
          img,
          title,
          summary,
          published,
          bodyText,
          bodyTextHTML,
          author,
          category,
          tags,
          firstPublished,
          posts,
          breadcrumbs: [
            { text: "The Hub", link: "/the-hub/1" },
            { text: title, link: context.route.path }
          ],
          mainPage: false,
        };
      })

      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({ statusCode: 404, message: 'Failed to receive content form api' })
        } else {
          console.error(res.response.data)
          context.error({ statusCode: res.response.status, message: res.response.data })
        }
      })
    }
  },

  computed: {
    headContent() {
      if(this.mainPage)
        return {
          title: 'Property Investment Blog',
          description: 'The official UOWN blog, featuring articles and advice on property investment and development, along with the latest UOWN company news. Click to read now.'
        }
        else return {
          title: this.title,
          description: this.summary
        }
    },

    imagesToPreload() {
      if(/^\d+$/.test(this.$route.params.param))
        return [
          {
            href: require('@/assets/images/the-hub.png?webp'),
            rel: 'preload',
            as: 'image',
            media: '(max-width: 639px)'
          },
          {
            href: require('@/assets/images/the-hub-desktop.png?webp'),
            rel: 'preload',
            as: 'image',
            media: '(min-width: 640px)'
          }
        ]
      else return [
          { hid: 'empty-1' },
          { hid: 'empty-2' },
        ]
    },

    articleSchema() {
      if(!/^\d+$/.test(this.$route.params.param))
        return {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Article',
            "headline": this.title,
            "image": [
              this.articleSchemaImageURL(this.img, 1),
              this.articleSchemaImageURL(this.img, 1.333333333),
              this.articleSchemaImageURL(this.img, 1.777777778),
            ],
            "datePublished": this.firstPublished,
            "dateModified": this.published,
            "description": this.summary,
            "author": {
              "@type": "Person",
              "name": this.author
            },
          }
        }
      else return {}
    },
  },

  methods: {
    articleSchemaImageURL(img, ratio) {
      img = img.split('.')
      img.splice(img.length-1, 1, 'webp')
      img = img.join('.')
      img = img.split('/')
      img.splice(6, 0, `ar_${ratio},c_fill,w_1200`)
      return img.join('/')
    }
  },

  mixins: [fullCanonicalURL, breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style scoped>
.bg {
  transform: rotate(25deg) translateY(7vw) scale(1.1);
  left: -40vw;
  width: 100%;
  top: 8vw;
}
</style>