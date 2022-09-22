<template>
  <div class="container my-12">
    <div class="grid-cols-4 gap-8 hidden lg:grid">
      <HubCard
        img="../assets/images/HUB_CARD_IMAGE.png"
        title="How to redecorate to gain the most money.sdfsdfds"
        linkText="12 min read →"
        link="/"
        :color="borderBottomColor"
        v-for="(item, i) in 12"
        :key="`hub-topic-${i}`"
      />
    </div>
    <div class="grid-cols-1 grid md:grid-cols-2 lg:hidden">
      <div
        :class="`hub-article-category p-6 relative mb-8 ${borderClass}`"
        v-for="(item, i) in 12"
        :key="`hub-topic-${i}`"
      >
        <h2 class="text-3xl font-bold">
          Tips for renting out a property for the first time.
        </h2>
        <div class="absolute see-popular text-xl">15min read →</div>
      </div>
    </div>
  </div>
</template>
<script>
import HubCard from "./HubCard.vue";
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    borderClass() {
      let res = "";
      if (this.category.includes(" ")) {
        res = this.category.toLowerCase().slice(0, this.category.indexOf(" "));
      } else {
        res = this.category.toLowerCase();
      }
      return res;
    },
    borderBottomColor() {
      switch (this.borderClass) {
        case "property":
          return "aquamarine";
        case "money":
          return "#5a6ecc";
        case "home":
          return "#ffd008";
        default:
          return "salmon";
      }
    }
  },
  date() {
    return {};
  },
  components: { HubCard }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables";

.container {
  max-width: 1640px;
}

.property {
  border: 1.4px solid aquamarine;
}

.money {
  border: 1.4px solid $blue;
}

.home {
  border: 1.4px solid $yellow;
}

.causes {
  border: 1.4px solid salmon;
}

.hub-article-category {
  border-radius: 20px;
  width: 368px;
  height: 210px;
}

.see-popular {
  left: 24px;
  bottom: 16px;
}

.rounded-100 {
  border-radius: 100px;
}
</style>
