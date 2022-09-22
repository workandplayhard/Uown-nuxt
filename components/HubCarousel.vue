<template>
  <div class="flex hub-carousel mb-8 ml-32">
    <div class="category-card-container">
      <nuxt-link :to="`/the-hub/${category}`">
        <div
          class="category-card p-6 relative"
          :style="{ 'background-color': bgColor }"
        >
          <div class="text-white text-5xl capitalize">{{ category }}</div>
          <img
            src="../assets/images/HUB_CATEGORY_IMAGE.png"
            class="category-image absolute"
          />
        </div>
      </nuxt-link>
    </div>
    <carousel-3d
      :disable3d="true"
      :height="height"
      :width="width"
      :border="0"
      controlsVisible
      :space="400"
      controls-prev-html="<span>←</span>"
      controls-next-html="→"
      :loop="false"
      :startIndex="0"
      :display="5"
    >
      <slide :index="0">
        <HubCard
          img="../assets/images/HUB_CARD_IMAGE.png"
          title="How to redecorate to gain the most money.sdfsdfds"
          linkText="12 min read →"
          link="/"
          :color="bgColor"
        />
      </slide>
      <slide :index="1">
        <HubCard
          img="../assets/images/HUB_CARD_IMAGE.png"
          title="How to redecorate to gain the most money.sdfsdfds"
          linkText="12 min read →"
          link="/"
          :color="bgColor"
        />
      </slide>
      <slide :index="2">
        <HubCard
          img="../assets/images/HUB_CARD_IMAGE.png"
          title="How to redecorate to gain the most money.sdfsdfds"
          linkText="12 min read →"
          link="/"
          :color="bgColor"
        />
      </slide>
      <slide :index="3">
        <HubCard
          img="../assets/images/HUB_CARD_IMAGE.png"
          title="How to redecorate to gain the most money.sdfsdfds"
          linkText="12 min read →"
          link="/"
          :color="bgColor"
        />
      </slide>
      <slide :index="4">
        <HubCard
          img="../assets/images/HUB_CARD_IMAGE.png"
          title="How to redecorate to gain the most money.sdfsdfds"
          linkText="12 min read →"
          link="/"
          :color="bgColor"
        />
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import TestimonialCard from "../components/TestimonialCard";
import HubCard from "./HubCard.vue";
export default {
  name: "HubCarousel",
  components: {
    TestimonialCard,
    HubCard
  },
  data() {
    return {
      width: 390,
      height: 470,
      display: 6
    };
  },
  props: {
    bgColor: {
      type: String
    },
    category: {
      type: String
    },
    articles: {
      type: Array
    },
    img: {
      type: String
    }
  },
  mounted() {
    this.$el.getElementsByClassName("prev")[0].style[
      "backgroundColor"
    ] = this.bgColor;
    this.$el.getElementsByClassName("next")[0].style[
      "backgroundColor"
    ] = this.bgColor;
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables";

.category-card-container {
  width: 418px;
  height: 412px;
  z-index: 1;
  background-color: white;
}

.category-card {
  width: 390px;
  height: 412px;
  border-radius: 20px;
  margin-right: 28px;
}

.category-image {
  width: 261px;
  height: 245px;
  left: 24px;
  bottom: 24px;
}

.hub-carousel {
  height: 470px;
  overflow: hidden;
}

.carousel-3d-slide {
  overflow: unset;
  background-color: transparent;
  height: 412px !important;
  border-radius: 20px;
}

.carousel-3d-container {
  margin: 0;
  width: 1360px;
  overflow: visible;
}

/deep/ .carousel-3d-controls {
  bottom: 40px;
  left: -430px;
  top: auto;
  padding-bottom: 12px;
  margin-left: 0.5rem;
}

/deep/ {
  .prev,
  .next {
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    color: white;
    font-size: 35px;
    line-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .next {
    position: absolute;
    left: 65px;
  }

  .next > span,
  .prev > span {
    margin-bottom: 7px;
  }
}
</style>
