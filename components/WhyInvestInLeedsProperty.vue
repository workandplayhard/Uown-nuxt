<template>
  <section class="py-12 md:pt-20 md:pb-12 relative overflow-hidden z-1">
    <cld-image
      public-id="backing-banner_rl6lzh.jpg"
      secure="true"
      width="1920"
      crop="fill"
      fetchFormat="auto"
      quality="50"
      class="absolute inset-0 -z-1 cover"
    >
      <cld-placeholder type="vectorize"></cld-placeholder>
    </cld-image>
    <div class="container">
      <heading text="Why Invest in Leeds Property?" class="heading text-white mb-20" center />
      <div
        class="flex flex-col lg:flex-row justify-between items-center lg:space-x-1 space-y-8 lg:space-y-0"
      >
        <whyInvestCircle
          heading="Buzzing"
          text="Destination city for retail, business, leisure, nightlife, sport & culture."
        />
        <img src="@/assets/images/arrow-uo.png" alt class="w-8 transform rotate-90 lg:rotate-0" />
        <whyInvestCircle
          heading="Growing"
          text="Local economy has grown by almost 40% in the last decade."
        />
        <img src="@/assets/images/arrow-uo.png" alt class="w-8 transform rotate-90 lg:rotate-0" />
        <whyInvestCircle
          heading="In Demand"
          text="Rising population with a continued demand for housing."
        />
      </div>
      <scrollIcon class="mx-auto mt-16" />
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import whyInvestCircle from "@/components/WhyInvestInLeedsPropertyCircle";
import scrollIcon from "@/components/ScrollIcon";

export default {
  components: {
    heading,
    whyInvestCircle,
    scrollIcon,
  },
};
</script>

<style scoped>
section::before {
  content: "";
  position: absolute;
  background-image: url(~@/assets/images/ellipse-aquamarine.svg);
  right: -100%;
  top: -60%;
  transform: scale(1.5);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
}

.heading >>> h1 {
  color: white;
}
</style>