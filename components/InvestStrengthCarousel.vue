<template>
  <client-only>
    <carousel-3d
      :perspective="0"
      :height="height"
      :width="width"
      :border="0"
      controlsVisible
      :display="display"
      :space="300"
    >
      <slide :index="0" class="p-6">
        <InvestStrengthCard title="£217k" strength_type="Paid out" />
      </slide>
      <slide :index="1" class="p-6">
        <InvestStrengthCard title="15%" strength_type="Average Profit" />
      </slide>
      <slide :index="2" class="p-6">
        <InvestStrengthCard title="5.5%" strength_type="Paid out" />
      </slide>
    </carousel-3d>
  </client-only>
</template>

<script>
import TestimonialCard from "../components/TestimonialCard";
import InvestStrengthCard from "./InvestStrengthCard.vue";
export default {
  name: "StackedCarousel",
  components: {
    TestimonialCard,
    InvestStrengthCard
  },
  data() {
    return {
      width: 350,
      height: 350,
      display: 5
    };
  },

  methods: {
    settings() {
      if (process.client)
        if (
          window.matchMedia("(max-width: 850px) and (orientation: landscape)")
            .matches
        ) {
          this.width = 400;
          this.height = 250;
          this.display = 3;
        } else if (window.matchMedia("(max-width: 639px)").matches) {
          this.width = 265;
          this.height = 265;
          this.display = 3;
        } else {
          this.width = 350;
          this.height = 350;
          this.display = 5;
        }
    }
  },

  created() {
    this.settings();
    if (process.client) window.addEventListener("resize", this.settings);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.carousel-3d-slide {
  overflow: unset;
  background-color: transparent;
}

.carousel-3d-container {
  margin: 0;
}

/deep/ .carousel-3d-controls {
  --scale: 0.7;
  --translate-x: 10%;
}

/deep/ {
  .prev,
  .next {
    background-color: $aquamarine;
    border-radius: 50%;
    span {
      display: none;
    }
    &::before {
      content: url("~@/assets/images/down-arrow.svg");
      display: block;
      filter: invert(1);
    }
  }
  .prev::before {
    transform: scale(var(--scale)) translateX(calc(var(--translate-x) * -1))
      rotate(90deg);
  }
  .next::before {
    transform: scale(var(--scale)) translateX(var(--translate-x)) rotate(-90deg);
  }
}
</style>
