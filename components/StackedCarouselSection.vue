<template>
  <div class="sm:py-12 bg-white h-screen md:py-1">
    <div class="container flex flex-col justify-center h-full">
      <div class="text-center">
        <h1 class="font-family-bold text-3xl mb-2">
          Don’t take our word for it.
        </h1>
        <p class="text-xl">
          See what our customers had to say about us. They don't mince their
          words and let us know if we're on the right track.
        </p>

        <div class="flex align-items-center justify-content-center mt-8 mb-16">
          <span class="title">4.6/5</span
          ><img
            src="@/assets/images/filled-star.png"
            width="30"
            class="ml-3"
          /><span class="title">Trustpilot</span>
        </div>
      </div>
      <StackedCarousel />
    </div>
  </div>
</template>

<script>
import StackedCarousel from "../components/StackedCarousel";
export default {
  name: "StackedCarouselSection",
  components: {
    StackedCarousel
  }
};
</script>

<style lang="scss" scoped>
.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.title {
  font-family: "Plus Jakarta Bold";
  font-style: ExtraBold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 1%;
  color: #373734;
}
</style>
