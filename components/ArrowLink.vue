<template>
  <div>
    <nuxt-link v-if="!arrowRight" :to="link" :class="commonClasses + ' ' + arrowClass">{{text}}</nuxt-link>
    <span v-else :to="link" :class="commonClasses + ' ' + arrowClass">{{text}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commonClasses: "link flex leading-none text-lg"
    };
  },

  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    },
    arrowRight: {
      type: Boolean
    }
  },

  computed: {
    arrowClass() {
      return this.arrowRight ? "arrow-right" : "";
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

$arrow-margin: 0.93rem;

.link.nuxt-link-active {
  color: $aquamarine;
  opacity: 1;
}

.link {
  color: #a7a7a7;
  transition: color 200ms;

  &:hover {
    color: black;
  }

  &::before,
  &::after {
    content: url("~@/assets/images/arrow-right.svg");
    width: 1rem;
  }

  &:not(.arrow-right) {
    &::before {
      margin-right: $arrow-margin;
    }

    &::after {
      display: none;
    }
  }

  &.arrow-right {
    &::before {
      display: none;
    }

    &::after {
      margin-left: $arrow-margin;
    }
  }
}
</style>