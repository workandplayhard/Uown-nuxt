<template>
  <nuxt-link
    :to="link"
    class="preview p-5 bg-white leading-tight transform hover:scale-95 transition duration-300 block"
  >
    <h1 class="text-xl md:text-2xl mb-2">{{ title }}</h1>
    <arrowLink text="15 min read" arrowRight />
  </nuxt-link>
</template>

<script>
import arrowLink from "@/components/ArrowLink";

export default {
  components: {
    arrowLink
  },

  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style lang="scss" scoped>
.preview {
  border-radius: 10px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.04);

  /deep/ .link {
    font-size: 0.88rem;
  }

  /deep/ .link {
    &::before,
    &::after {
      content: url("~@/assets/images/arrow-right.svg");
    }
  }

  &:hover {
    /deep/ .link::after {
      transform: translateX(0.6rem);
    }
  }
}
</style>
