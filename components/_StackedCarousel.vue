<template>
  <client-only>
    <carousel-3d
      :perspective="0"
      :height="height"
      :width="width"
      :border="0"
      controlsVisible
      :display="display"
      :space="space"
    >
      <slide :index="0" class="p-6">
        <TestimonialCard
          :img="require(`~/assets/images/user-pic.png`)"
          quote="Good online service with clear information about investments and risk. Great platform as you can invest from small to large amounts."
          belowName="Fraser"
        />
      </slide>
      <slide :index="1" class="p-6">
        <TestimonialCard
          :img="require(`~/assets/images/avatar-male.svg`)"
          quote='Easy for the "little people" to invest. Rents always on time. Portfolio growing.'
          belowName="D Davenport"
        />
      </slide>
      <slide :index="2" class="p-6">
        <TestimonialCard
          :img="require(`~/assets/images/avatar-female.svg`)"
          quote="I really love UOWN, returns higher than other platforms and they have delivered for me every time."
          belowName="Libby Knowles"
        />
      </slide>
      <slide :index="3" class="p-6">
        <TestimonialCard
          :img="require(`~/assets/images/avatar-female.svg`)"
          quote="The team at UOWN are incredibly useful, professional, and switched on."
          belowName="Zak"
        />
      </slide>
      <slide :index="4" class="p-6">
        <TestimonialCard
          :img="require(`~/assets/images/user-pic.png`)"
          quote="Excellent customer service, and clear that the company is aiming to be transparent and enthusiastic."
          belowName="Chris Hale"
        />
      </slide>
    </carousel-3d>
  </client-only>
</template>

<script>
import TestimonialCard from "../components/TestimonialCard";
export default {
  name: "StackedCarousel",
  components: {
    TestimonialCard
  },
  data() {
    return {
      width: 350,
      height: 350,
      display: 5
    };
  },
  computed: {
    slidesToShow() {
      return this.$mq === "md" || this.$mq === "sm" ? 3 : 5;
    },
    space() {
      return this.$mq === "md" || this.$mq === "sm" ? 125 : 200;
    }
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

  img {
    width: 30px !important;
  }
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
