<template>
  <div class="flex flex-col items-center">
    <div
      class="hub-article-category py-4 px-6 relative text-white mb-8"
      :style="{ 'background-color': bgColor }"
    >
      <h2 class="text-5xl font-bold">{{ category }}</h2>
      <div class="absolute see-popular text-2xl" @click="triggerPipular">
        See Popular >
      </div>
    </div>
    <div class="articles flex flex-col items-center" v-if="visiablePopular">
      <div
        class="hub-article-category p-6 relative mb-8"
        :style="{ border: `1.4px solid ${bgColor}` }"
      >
        <h2 class="text-3xl font-bold">
          Tips for renting out a property for the first time.
        </h2>
        <div class="absolute see-popular text-xl">15min read →</div>
      </div>
      <div
        class="hub-article-category p-6 relative mb-8"
        :style="{ border: `1.4px solid ${bgColor}` }"
      >
        <h2 class="text-3xl font-bold">
          Tips for renting out a property for the first time.
        </h2>
        <div class="absolute see-popular text-xl">15min read →</div>
      </div>
      <div
        class="hub-article-category p-6 relative mb-8"
        :style="{ border: `1.4px solid ${bgColor}` }"
      >
        <h2 class="text-3xl font-bold">
          Tips for renting out a property for the first time.
        </h2>
        <div class="absolute see-popular text-xl">15min read →</div>
      </div>
      <nuxt-link
        class="px-8 py-4 text-xl font-bold mb-8 rounded-100 text-white"
        :style="{ 'background-color': bgColor }"
        :to="`/the-hub/${category}`"
      >
        Explore Category
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  methods: {
    triggerPipular() {
      this.visiablePopular = !this.visiablePopular;
    }
  },
  data() {
    return {
      visiablePopular: false
    };
  }
};
</script>
<style>
.hub-article-category {
  border-radius: 20px;
  width: 368px;
  height: 210px;
}

.see-popular {
  left: 24px;
  bottom: 16px;
}

.rounded-100 {
  border-radius: 100px;
}
</style>
