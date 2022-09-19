<template>
  <div class="flex text-lg">
    <img :src="icon" alt class="mr-16 w-16 h-16" />
    <div>
      <span class="title">{{ title }}</span>
      <ul class="flex flex-col items-start space-y-2">
        <li
          v-for="(e, i) in listItems"
          :key="i"
          v-scroll-to="{ el: `#${e.scrollTo}`, offset: getOffset(e) }"
          class="border-b border-transparent hover:border-white transition-colors duration-300 relative cursor-pointer"
        >{{ e.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    listItems: {
      type: Array,
      required: true,
    },
  },

  methods: {
    getOffset: e => (e.hasOwnProperty("offset") ? e.offset : -56),
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

$offset: -1.75rem;

li::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: $offset + 0.3rem;
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  background-color: $aquamarine;
}

.title {
  margin-left: $offset;
}
</style>