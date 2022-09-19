<template>
  <div class="circle bg-white rounded-full flex flex-col items-center justify-center p-10">
    <heading :text="heading" notBold size='md' class="leading-none" />
    <div class="x-line my-6"></div>
    <p class="text-lg opacity-75 text-center">{{ text }}</p>
  </div>
</template>

<script>
import heading from "@/components/Heading2";

export default {
  components: {
    heading,
  },

  props: {
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.circle {
  width: 20rem;
  height: 20rem;
}

.x-line {
  width: 14%;
  height: 4px;
}
</style>