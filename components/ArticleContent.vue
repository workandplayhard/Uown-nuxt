<template>
  <div class="main py-8" v-html="getText"></div>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      required: true,
    },
    textHTML: {
      type: String,
      required: true,
    },
  },

  computed: {
    getText() {
      return this.textHTML.trim()
        ? this.textHTML
        : this.text
        ? this.$storyapi.richTextResolver.render(this.text)
        : "";
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.main /deep/ {
  > * {
    margin-bottom: 1.25rem;
  }

  p,
  blockquote,
  ul,
  ol,
  h1,
  h4,
  h5 {
    color: rgba(0, 0, 0, 0.625);
  }

  p,
  ul,
  ol {
    font-family: "plus jakarta", serif;
    font-size: 1.125rem;
  }

  ul,
  ol {
    margin-left: 1.25rem;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    margin-bottom: 0.35rem;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: bold;
  }

  h2,
  h3 {
    margin: 2rem 0 1rem 0;
  }

  h2 {
    font-size: 1.875rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-family: CircularStd-Book;
    line-height: 1.25;
    font-weight: bold;
    font-size: 1.125rem;
  }

  h5 {
    font-weight: bold;
  }

  img {
    width: 100%;
  }

  blockquote {
    padding: 0.625rem 1.25rem;
    border-left: 5px solid #e2e2e2;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }

  a {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: border-color 200ms, color 200ms;

    &:hover {
      color: black;
      border-color: black;
    }
  }

  img {
    margin: 3rem auto;
  }

  .w-richtext-figure-type-video {
    padding-bottom: unset !important;

    iframe {
      width: 100%;
      margin: auto;
      height: 50vw;
      max-height: 31.25rem;
    }
  }

  figure {
    position: relative;
  }

  figcaption {
    font-size: 0.725rem;
    background-color: black;
    color: #bbb;
    padding: 0.3rem 0.7rem;
    transform: translateY(-2.75rem);

    a {
      color: $darkgray;
      border-bottom: 1px solid rgba(100, 99, 99, 0.4);

      &:hover {
        color: inherit;
        border-color: inherit;
      }
    }
  }

  @media (min-width: $sm) {
    figcaption {
      position: absolute;
      bottom: 0;
      right: 2rem;
      transform: translateY(50%);
    }
  }
}
</style>