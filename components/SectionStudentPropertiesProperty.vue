<template>
  <div class="box rounded relative w-full text-center max-w-xs sm:max-w-full">
    <img :src="thumbnail" alt="" class="w-full rounded-t" />
    <div class="p-4 font-family-bold">
      {{ name }}
    </div>
    <div v-if="potentialGrowth" class="border-t p-2">
      <span class="text-sm font-family-bold"
        >{{ potentialGrowth.toFixed(2) }}%</span
      >
      <span class="text-xs">POTENTIAL GROWTH</span>
    </div>
    <a
      v-if="link"
      :href="link"
      class="border-t w-full inline-block p-4 rounded-b text-lg transition-colors duration-200 hover:bg-black hover:text-white"
      >SEE MORE</a
    >
    <span
      v-if="type"
      class="type absolute top-0 right-0 py-1 px-2 bg-darkgray text-white rounded-tr text-sm"
      >{{ type }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    potentialGrowth: {
      type: Number,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style scoped>
.box {
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.14);
  background-color: #f6f6f0;
}
</style>