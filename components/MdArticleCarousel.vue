<template>
  <client-only>
    <carousel-3d
      :disable3d="true"
      :space="280"
      :clickable="false"
      controlsVisible
    >
      <slide
        v-for="(slide, i) in Math.floor(slides.length / 2)"
        :index="i"
        :key="i"
      >
        <p>
          {{ slides[i] }}
        </p>

        <popularPreview title />

        <div class="second">
          <p>
            {{ slides[Math.floor(slides.length / 2) + i] }}
          </p>
          <popularPreview title />
        </div>
      </slide>
    </carousel-3d>
  </client-only>
</template>

<script>
const popularPreview = () => import("@/components/HelpPopularPreview");

export default {
  data() {
    return {
      slides: [
        "Is Property still a good investment?",
        "Is Property still a good investment?",
        "Is Property still a good investment?",
        "Is Property still a good investment?",
        "Is Property still a good investment?",
        "Is Property still a good investment?"
      ]
    };
  },
  components: {
    popularPreview
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.second {
  border: solid 1px rgba(0, 0, 0, 0.07);
  width: 253px;
  height: 150px;
  position: absolute;
  right: -2px;
  padding: 20px;
  top: 11rem;
  border-radius: 20px;
}

.carousel-3d-slide {
  overflow: unset;
  font-family: "Plus Jakarta Bold";
  font-style: Bold;
  font-size: 20px;
  line-height: 28px;
  color: #1d1d1b;
  background: white !important;
  padding: 20px;
  border-radius: 20px;
  margin: 20px;
  border-color: rgba(0, 0, 0, 0.07);
  width: 253px !important;
  height: 150px !important;
  margin-left: 3.5rem;
}

.carousel-3d-container {
  margin: 0;
  height: 390px !important;
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
    top: 95%;
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
