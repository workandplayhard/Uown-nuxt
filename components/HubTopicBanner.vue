<template>
  <div
    :class="
      `hub-topic-banner ${bgClass} md:flex md:flex-col justify-center items-center grid grid-rows-2`
    "
  >
    <div class="hub-banner-image order-2 md:order-1 mx-auto">
      <img src="@/assets/images/HOME_JOURNEY.jpg" />
    </div>
    <div class="text-center text-white order-1 md:order-2 mt-auto md:m-0">
      <h1 class="capitalize md:text-5xl font-bold text-center text-4xl">
        {{ category }}
      </h1>
      <div class="hub-topic-banner-content mt-5">
        The Hub is our knowledge center featuring useful and inspirational
        articles. Maybe add another sentence of context in here, describing what
        the articles theme around. The Hub is our knowledge center featuring
        useful and inspirational articles.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    bgClass() {
      let res = "";
      if (this.category.includes(" ")) {
        res = this.category
          .toLowerCase()
          .slice(0, this.category.indexOf(" ") + 1);
      } else {
        res = this.category.toLowerCase();
      }
      return res;
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables";
.property {
  background-color: aquamarine;
}

.money {
  background-color: $blue;
}

.home {
  background-color: $yellow;
}

.causes {
  background-color: salmon;
}

.hub-topic-banner {
  height: 680px;
}

.hub-topic-banner-content {
  width: 362px;
}

.hub-banner-image {
  width: 305px;
  height: 267px;
}

@media (min-width: 768px) {
  .hub-banner-image {
    width: 359px;
    height: 338px;
  }
  .hub-topic-banner-content {
    width: 684px;
  }
}

@media (min-width: 1024px) {
  .hub-banner-image {
    position: absolute;
    width: 453px;
    height: 405px;
    top: 125px;
    left: 170px;
  }
}
</style>
