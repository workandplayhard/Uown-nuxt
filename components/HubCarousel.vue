<template>
  <div class="flex hub-carousel mb-8 ml-vw">
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
    <div class="carousel-content">
      <carousel-3d
        :disable3d="true"
        :height="height"
        :width="width"
        :border="0"
        controlsVisible
        :space="330"
        controls-prev-html="<span>←</span>"
        controls-next-html="→"
        :loop="false"
        :startIndex="0"
        :display="5"
        dir="ltr"
      >
        <slide :index="0">
          <HubCard
            img="../assets/images/HUB_CARD_IMAGE.png"
            title="How to earn money"
            linkText="12 min read →"
            link="/"
            class="hug-card"
            :color="bgColor"
          />
        </slide>
        <slide :index="1">
          <HubCard
            img="../assets/images/HUB_CARD_IMAGE.png"
            title="How to redecorate to gain the most money."
            linkText="12 min read →"
            link="/"
            class="hug-card"
            :color="bgColor"
          />
        </slide>
        <slide :index="2">
          <HubCard
            img="../assets/images/HUB_CARD_IMAGE.png"
            title="How to redecorate to gain the most money."
            linkText="12 min read →"
            link="/"
            class="hug-card"
            :color="bgColor"
          />
        </slide>
        <slide :index="3">
          <HubCard
            img="../assets/images/HUB_CARD_IMAGE.png"
            title="How to redecorate to gain the most money."
            linkText="12 min read →"
            link="/"
            class="hug-card"
            :color="bgColor"
          />
        </slide>
        <slide :index="4">
          <HubCard
            img="../assets/images/HUB_CARD_IMAGE.png"
            title="How to redecorate to gain the most money."
            linkText="12 min read →"
            link="/"
            class="hug-card"
            :color="bgColor"
          />
        </slide>
      </carousel-3d>
    </div>
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
      width: 300,
      height: 370,
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
  width: 328px;
  height: 312px;
  z-index: 1;
  background-color: white;
}

.category-card {
  width: 300px;
  height: 312px;
  border-radius: 20px;
  margin-right: 28px;
  background: black;
}

.ml-vw {
  margin-left: calc(50vw - 985px);
}

.category-image {
  width: 171px;
  height: 145px;
  left: 24px;
  bottom: 24px;
}

.hub-carousel {
  height: 370px;
  overflow: hidden;
}

.carousel-3d-slide {
  overflow: unset;
  background-color: transparent;
  height: 312px !important;
  border-radius: 20px;
}

.hub-card {
  &:hover {
    opacity: 0.5;
  }
}

.carousel-3d-container {
  margin: 0;
  width: 1360px;
  overflow: visible;
  margin-left: 41rem;
}

/deep/ .carousel-3d-slider {
  margin: 0 !important;
}

/deep/ .carousel-3d-controls {
  bottom: 40px;
  left: -1002px;
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
