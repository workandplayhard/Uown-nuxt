<template>
  <form
    @submit.prevent="goToSearch"
    class="search flex rounded-full pl-5 justify-between relative"
    :class="{ 'bg-light': !ver2, 'ver-2 transition-colors duration-300': ver2 }"
  >
    <img src="@/assets/images/search.svg" alt class="icon h-full absolute top-0 left-0" />
    <input
      type="text"
      name
      id
      class="input w-full bg-transparent focus:outline-none opacity-75 pl-10 mr-4"
      :placeholder="placeholder"
      required
      v-model="query"
    />
    <button
      class="btn h-full text-xl px-6 transition-colors duration-300 focus:outline-none rounded-r-full"
      :class="{ 'ver-2 transition-colors duration-200 bg-black text-white': ver2, 'hover:text-link': !ver2 }"
    >Search</button>
  </form>
</template>

<script>
export default {
  props: {
    ver2: {
      type: Boolean
    },
    placeholder: {
      type: String
    }
  },

  data() {
    return {
      query: ""
    };
  },

  methods: {
    goToSearch() {
      if (this.query.trim()) {
        if (
          this.$route.name == "the-hub" ||
          this.$route.name == "search-hub" ||
          this.$route.name == "tag-tag" ||
          this.$route.name == "category-category"
        )
          var path = "search-hub";
        else var path = "search-help";
        this.$router.push({ path: `/${path}`, query: { query: this.query.trim() } });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.search {
  max-width: 30rem;
  height: 3.5rem;

  &.ver-2 {
    background-color: #eee;

    &:hover {
      background-color: #fff;
    }
  }
}

.icon {
  transform: scale(0.4) translateX(0.5rem);
}

.input {
  font-size: 1.1rem;

  &::placeholder {
    color: #888;
  }
}

.btn.ver-2:hover {
  background-color: #818181;
}
</style>