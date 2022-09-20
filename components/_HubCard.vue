<template>
  <div class="shadow-md flex flex-col relative bg-white">
    <nuxt-link :to="link">
      <cld-image
        :public-id="cloudinaryImageID(img)"
        secure="true"
        :width="thumbnailWidth"
        crop="fill"
        fetchFormat="auto"
        loading="lazy"
        class="img w-full cover"
      >
        <cld-placeholder type="predominant-color"></cld-placeholder>
    </cld-image>
    </nuxt-link>
    <div class="bg-white p-4 rounded-b h-full flex flex-col justify-between">
      <nuxt-link :to="link" class="title text-xl leading-snug font-family-bold">{{title}}</nuxt-link>
      <div class="text-sm flex items-center mt-4">
        <img src="@/assets/images/time.svg" alt class="w-4 mr-2" width="1" height="1" />
        <span class="text-xs leading-none opacity-60">Published on {{published | formttedDate}}</span>
      </div>
    </div>
    <nuxt-link
      v-if="category"
      :to="`/category/${category.slug}/1`"
      class="filter absolute rounded-full py-1 px-3 text-sm text-white bg-soft shadow-md"
      :style="{ backgroundColor: category.content.color }"
    >{{category.content.name}}</nuxt-link>
  </div>
</template>

<script>
import cloudinaryImageID from '@/mixins/cloudinaryImageID'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    published: {
      type: Date,
      required: true
    },
    category: {
      type: Object,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    thumbnailWidth: {
      type: Number,
      default: 582
    }
  },

  mixins: [cloudinaryImageID]
};
</script>

<style lang='scss' scoped>
@import '@/assets/css/_variables';

.img {
  height: 19rem;
  min-height: 19rem;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.15);
  }
}

.filter {
  top: 0.75rem;
  right: 0.75rem;
}

@media (min-width: $sm) {
  .title {
    font-size: 1.375rem;
  }
}
</style>