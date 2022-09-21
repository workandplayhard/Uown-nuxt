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
      height: 354,
      display: 3
    };
  },
  computed: {
    slidesToShow() {
      return this.$mq === "md" || this.$mq === "sm" ? 3 : 5;
    },
    space() {
      return 440;
    }
  },

  methods: {
    settings() {
      if (process.client)
        if (
          window.matchMedia("(max-width: 850px) and (orientation: landscape)")
            .matches
        ) {
          this.width = 279;
          this.height = 323;
          this.display = 3;
        } else if (window.matchMedia("(max-width: 639px)").matches) {
          this.width = 360;
          this.height = 389;
          this.display = 3;
        } else {
          this.width = 389;
          this.height = 460;
          this.display = 3;
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
  padding: 20px;
}

.carousel-3d-container {
  margin: 0;
  overflow: visible !important;
}

/deep/ .carousel-3d-controls {
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
    top: 110% !important;
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
