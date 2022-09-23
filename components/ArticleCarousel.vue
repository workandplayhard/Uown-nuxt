<template>
  <client-only>
    <carousel-3d
      :disable3d="true"
      :space="450"
      :clickable="false"
      dir="ltr"
      controlsVisible
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <p>
          Tips for renting out a property for the first time.
        </p>

        <popularPreview title />
      </slide>
    </carousel-3d>
  </client-only>
</template>

<script>
const popularPreview = () => import("@/components/HelpPopularPreview");

export default {
  data() {
    return { slides: 7 };
  },
  components: {
    popularPreview
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.carousel-3d-slide {
  @media (min-width: $lg) {
    overflow: unset;
    font-family: "Plus Jakarta Bold";
    font-style: Bold;
    font-size: 30px;
    line-height: 36px;
    color: #1d1d1b;
    background: white !important;
    padding: 20px;
    border-radius: 20px;
    margin: 20px;
    border-color: rgba(0, 0, 0, 0.07);
    width: 389px !important;
    height: 232px !important;
  }

  @media (max-width: $lg) {
    width: 253px !important;
    height: 150px !important;
  }
}

.carousel-3d-container {
  margin: 0;
  height: 320px !important;
}

/deep/ .carousel-3d-controls {
  top: 90%;
  display: block;
  width: 8rem;
  @media (min-width: 2180px) {
    margin-left: calc(50vw - 1070px) !important;
  }
  --scale: 1.2;
  --translate-x: 10%;

  @media (max-width: $lg) {
    width: 10em;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: block;
  }

  @media (max-width: $sm) {
    top: 120% !important;
  }
}

.time {
  font-family: "Plus Jakarta";
  font-style: Medium;
  font-size: 20px;
  line-height: 28px;
  color: #1d1d1b;
}

@media (min-width: $lg) {
  .lg-hidden {
    display: none;
  }
}

/deep/ {
  .prev,
  .next {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: none;
    }
    &::before {
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .prev::before {
    content: url("~@/assets/images/left-arrow.svg");
  }
  .next::before {
    content: url("~@/assets/images/right-arrow.svg");
  }
}
</style>
