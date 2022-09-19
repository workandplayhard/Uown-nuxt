<template>
  <div>
    <nuxt-link
      v-if="!notLink && !outerLink"
      :to="link"
      class
      :class="commonClasses + ' ' + uncommonClasses"
      >{{ text }}</nuxt-link
    >
    <a
      :href="link"
      v-if="!notLink && outerLink"
      :to="link"
      class
      :class="commonClasses + ' ' + uncommonClasses"
      >{{ text }}</a
    >
    <template v-if="notLink">
      <button
        v-if="scrollTo"
        :class="commonClasses + ' ' + uncommonClasses"
        v-scroll-to="{ el: `#${this.scrollTo}`, offset: scrollOffset }"
      >
        {{ text }}
      </button>
      <button
        v-else
        :class="[
          commonClasses,
          uncommonClasses,
          { 'opacity-50 cursor-not-allowed': disabled },
        ]"
        class="flex items-center justify-center"
        :disabled="disabled"
      >
        <svg
          v-if="loading"
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        {{ text }}
      </button>
    </template>
    <p
      v-if="underText"
      v-interpolation
      v-html="underText"
      class="text-under bg-opacity-75 ml-2 mt-1 text-lg"
    ></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commonClasses:
        "py-2 px-6 inline-block bold rounded-full transition-colors duration-200 focus:outline-none",
    };
  },

  props: {
    link: {
      type: String,
      default: "#",
    },
    text: {
      type: String,
      required: true,
    },
    invest: {
      type: Boolean,
    },
    notLink: {
      type: Boolean,
    },
    hollow: {
      type: Boolean,
    },
    underText: {
      type: String,
    },
    scrollTo: {
      type: String,
    },
    scrollOffset: {
      type: Number,
      default: -58,
    },
    outerLink: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    uncommonClasses() {
      if (this.hollow && !this.invest)
        return "border-black border-2 hover:bg-black hover:text-white";
      else if (!this.hollow && !this.invest)
        return "bg-black text-white hover:bg-redorange";
      else if (this.invest) return "bg-redorange text-white";
    },

    // getScrollElement() {
    //   return this.scrollTo ? `#${this.scrollTo}` : "#scroll";
    // },
  },
};
</script>

<style>
</style>