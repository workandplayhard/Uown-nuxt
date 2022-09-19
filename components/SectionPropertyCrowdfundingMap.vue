<template>
  <section class="sm:pt-32 lg:py-32 xl:py-0 bg-no-repeat" :style="bgImage">
    <div class="container lg:grid grid-cols-2 bg-no-repeat bg-right xl:py-32">
      <div>
        <heading text="UOWN properties in Leeds." />
        <p class="text-xl">
          We have diversity in our portfolio in Leeds, where our properties
          range from four-bedroom semis to seven-bedroom terrace houses, all
          located in the well-established student area of Leeds. These
          properties are steady performers where we can use historical data and
          our own experience to judge expected capital growth and offer
          potential rental yields between 6% and 9%, which is more than
          competitive when you look at other cities in the UK making these ideal
          for property crowdfunding investment.
        </p>
        <btn
          text="INVEST"
          outerLink
          link="https://app.uown.co/properties"
          underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'>at risk</a>"
          class="mt-8"
          invest
        />
      </div>
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import btn from "@/components/BtnRounded";

export default {
  components: {
    heading,
    btn,
  },

  props: {
    w: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    bgImage() {
      return {
        "--bg-image": this.w
          ? `url(${require(`@/assets/images/map-w.png`)})`
          : `url(${require(`@/assets/images/map-n.jpg`)})`,
      };
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

@media (min-width: $sm) {
  section {
    background-image: var(--bg-image);
    background-size: 50%;
    background-position-x: 140%;
  }

  p {
    width: 82%;
  }
}

@media (min-width: $lg) {
  section {
    background-size: 70%;
    background-position-x: 180%;
  }

  p {
    width: 100%;
  }
}

@media (min-width: $xl) {
  section {
    background-image: none;
  }

  p {
    width: calc(100% - 1.5rem);
  }

  .container {
    background-image: var(--bg-image);
    background-size: calc(53% - 1.5rem);
  }
}
</style>