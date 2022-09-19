<template>
  <nuxt-link
    :to="'/category/' + link + '/1'"
    class="block filter-link"
    :class="{ 'border-b border-gray-400 hover:border-black transition-colors duration-200 pb-2 sm:pb-0 sm:px-2': ver2 }"
  >
    <dotText :text="text" :bg="bg" :ver2="ver2" />
  </nuxt-link>
</template>

<script>
import dotText from "@/components/DotText";

export default {
  components: {
    dotText
  },

  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    bg: {
      type: String,
      required: true
    },
    ver2: {
      type: Boolean
    }
  },
};
</script>

<style lang='scss' scoped>
.filter-link {
  &:hover {
    /deep/ .text {
      opacity: 1;
    }
  }
}
</style>