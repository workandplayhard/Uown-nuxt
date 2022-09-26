<template>
  <picture v-if="lazyLoad" class="flex">
    <source :data-srcset="sourceWebp" type="image/webp" />
    <img
      :data-src="source"
      class="lazyload w-full h-full"
      :class="imgClasses"
      alt="Image"
      :width="dimensions.width"
      :height="dimensions.height"
    />
  </picture>
  <picture v-else class="flex">
    <source :srcset="sourceWebp" type="image/webp" />
    <img
      :src="source"
      class="w-full h-full"
      :class="imgClasses"
      alt="Image"
      :width="dimensions.width"
      :height="dimensions.height"
    />
  </picture>
</template>

<script>
export default {
  name: "AppImage",
  props: {
    sourceWebp: {
      type: String
      // required: true
    },
    source: {
      type: String,
      required: true
    },
    imgClasses: {
      type: String
    },
    dimensions: {
      type: Object,
      default: () => ({ width: "1", height: "1" })
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    img: {
      type: String,
      require: true
    }
  }
};
</script>

<style></style>
