<template>
  <div class="pagination flex flex-wrap text-sm">
    <nuxt-link
      :to="link + '/' + prev"
      class="rounded-bl rounded-tl"
      :class="{ 'disabled': current === 1 }"
      >Prev</nuxt-link
    >
    <nuxt-link v-for="e in getTotal" :key="e" :to="link + '/' + e">{{
      e
    }}</nuxt-link>
    <nuxt-link
      :to="link + '/' + next"
      class="rounded-br rounded-tr"
      :class="{ 'disabled': current === getTotal }"
      >Next</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true
    },
  },

  computed: {
    getTotal() {
      return Math.ceil(this.total);
    },

    prev() {
      return this.current > 1 ? this.current - 1 : 1;
    },

    next() {
      return this.current < this.getTotal
        ? this.current + 1
        : this.getTotal;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.pagination {
  $border-radius: .25rem;

  a {
    padding: .5rem .85rem;
    background-color: white;
    border: 1px solid #ddd;
    transition: background-color 150ms, color 150ms;
    // for multi-line pagination
    margin-bottom: 3.75px;

    &:not(:last-child) {
      border-right: none;
    }

    &.disabled {
      color: #888;
      cursor: default;
    }

    &:not(.nuxt-link-exact-active) {
      color: $blue
    }

    &.nuxt-link-exact-active:not(:first-child):not(:last-child) {
      background-color: $blue;
      border-color: $blue;
      color: white;
    }

    &.nuxt-link-exact-active + a {
      border-left-color: $blue;
    }

    &:not(.disabled):hover {
      background-color: lighten($blue, 35%);
    }
  }
}
</style>