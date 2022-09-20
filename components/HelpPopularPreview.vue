<template>
  <nuxt-link
    :to="link"
    class="preview pt-10 bg-white leading-tight transform hover:scale-95 transition duration-300 block position"
  >
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
.position {
  font-family: "Plus Jakarta";
  font-style: Medium;
  font-size: 20px;
  line-height: 28px;
  color: #1d1d1b;
}

.preview {
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
