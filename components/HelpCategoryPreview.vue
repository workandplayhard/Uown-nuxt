<template>
  <nuxt-link
    :to="link"
    class="preview p-5 bg-white leading-tight transform hover:scale-95 transition duration-300 block"
  >
    <h1 class="text-xl md:text-2xl mb-2">{{ title }}</h1>
    <img
      :src="require(`@/assets/images/HELP_CENTRE_${inde + 1}.svg`)"
      alt
      width="45"
      height="42"
      aria-label="1"
    />
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
    },
    inde: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.preview {
  /deep/ .link {
    font-size: 0.88rem;
  }

  &:hover {
    /deep/ .link::after {
      transform: translateX(0.6rem);
    }
  }
}

a {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
