<template>
  <div
    class="main mt-from-header py-24 relative"
  >
    <cld-image
      :public-id="cloudinaryImageID(img)"
      secure="true"
      height="720"
      crop="fill"
      fetchFormat="auto"
      quality="40"
      class="absolute inset-0 -z-1 cover"
    />
    <div class="container lg:grid items-end relative">
      <div class="text h-full">
        <h1 class="title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">{{title}}</h1>
        <p class="summary text-xl text-white mt-6">{{summary}}</p>
      </div>
      <ul class="info bg-white z-1 transform translate-y-32 divide-y">
        <articleInfoLi upper="written by" :lower="author" />
        <articleInfoLi upper="published on" :lower="new Date(published) | formttedDate2" />
        <articleInfoLi upper="related tags">
          <div class="flex space-x-1">
            <articleInfoTag
              v-for="(tag, i) in tags"
              :text="tag.content.name"
              :link="'/tag/' + tag.slug"
              :key="i"
            />
          </div>
        </articleInfoLi>
        <articleInfoLi upper="share">
          <div class="flex space-x-2">
            <ShareNetwork network="facebook" :url="getURL" :title="title" :description="summary">
              <shareIcon :src="require('@/assets/images/fb-1.svg')" />
            </ShareNetwork>
            <ShareNetwork network="twitter" :url="getURL" :title="title">
              <shareIcon :src="require('@/assets/images/twitter-1.svg')" />
            </ShareNetwork>
            <ShareNetwork network="whatsapp" :url="getURL" :title="title" :description="summary">
              <shareIcon :src="require('@/assets/images/whatsapp.svg')" />
            </ShareNetwork>
            <ShareNetwork network="email" :url="getURL" :title="title" :description="summary">
              <shareIcon :src="require('@/assets/images/envelope.svg')" />
            </ShareNetwork>
          </div>
        </articleInfoLi>
      </ul>
    </div>
  </div>
</template>

<script>
import articleInfoLi from "@/components/ArticleInfoLi";
import articleInfoTag from "@/components/ArticleInfoTag";
import shareIcon from "@/components/ShareIcon";
import cloudinaryImageID from '@/mixins/cloudinaryImageID'

export default {
  components: {
    articleInfoLi,
    articleInfoTag,
    shareIcon
  },

  props: {
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    published: {
      type: Date,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },

  computed: {
    getURL()  {
      return this.$store.state.canonicalURL + this.$route.path
      }
  },

  // methods: {
  //   constructCloudinaryURL(imgUrl) {
  //     let url = imgUrl
  //     let config = "c_scale,dpr_1.0,w_700/c_fill,dpr_auto,f_auto,w_auto/v1"
  //     url = url.split('/')
  //     url.splice(url.length - 3, 1, config)
  //     console.log(url.join('/'))
  //     return url.join('/')
  //   }
  // },

  mixins: [cloudinaryImageID]
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.main {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  > .container {
    grid-template-columns: 1fr auto;
  }
}

@media (min-width: $sm) {
  .summary {
    font-size: 1.375rem;
  }
}

@media (min-width: $lg) {
  .text {
    max-width: 65%;
  }

  .title {
    line-height: 1.2;
  }
}

.info {
  min-width: 18.75rem;
}
</style>