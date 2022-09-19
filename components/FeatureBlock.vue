<template>
  <div
    class="feature-block bg-white rounded-lg p-5 text-center bg-no-repeat bg-contain"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <heading :text="title" size="sm" />
    <div class="x-line my-4 mx-auto"></div>
    <p class="text-xl">{{ description }}</p>
  </div>
</template>

<script>
import heading from "@/components/Heading2";

export default {
  components: {
    heading,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature-block {
  box-shadow: 0 0 25px 4px rgba(0, 0, 0, 0.12);
  padding-top: 50%;
}

.x-line {
  width: 14%;
  height: 4px;
}
</style>