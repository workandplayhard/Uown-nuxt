<template>
  <div class="banner relative bg-no-repeat bg-cover bg-center">
    <video
      :src="videoSrc"
      loop
      class="
        absolute
        w-full
        fit
        object-cover
        h-100
        top-0
        h-full
        hidden
        md:block
      "
      autoplay
      muted
      ref="mainVideo"
    ></video>
    <div
      class="
        container
        text-center
        transform
        translate-y-16
        md:translate-y-24
        flex flex-col
        items-center
      "
    >
      <h1
        class="text-4xl md:text-5xl lg:text-6xl mx-auto px-6 font-family-bold"
      >
        A home for your money.
      </h1>
      <div class="text-xl sm:text-2xl my-5 opacity-75 leading-snug">
        <p>UOWN makes property investing simple, accessible and easy.</p>
        <p>Rated 4.7/5 on Trustpilot.</p>
      </div>
      <BtnRounded
        text="I'm an investor"
        link="https://app.uown.co/register"
        outerLink
        invest
        class="text-2xl"
        id="am-investor"
      />
      <NLink
        to="/borrow"
        class="
          block
          opacity-50
          hover:opacity-75
          mt-4
          border-b border-gray-500
          hover:border-black
        "
        id="interested-in-borrowing"
        >I'm interested in borrowing</NLink
      >
    </div>
  </div>
</template>

<script>
const BtnRounded = () => import("../components/BtnRounded");
export default {
  name: "MainBanner",
  components: {
    BtnRounded
  },

  data: () => ({
    videoSrc: require("~/assets/HOME_HERO.mp4")
  }),

  mounted() {
    if (
      this.$refs.mainVideo.canPlayType('video/mp4; codecs="av01.0.04M.08"') !=
      "probably"
    )
      this.videoSrc = require("~/assets/HOME_HERO-avc.mp4");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.banner {
  background-image: url(~@/assets/images/homepage-banner.png?webp);
}

.no-webp .banner {
  background-image: url(~@/assets/images/homepage-banner.png);
}

@media (min-width: $md) {
  .banner.banner {
    background-image: unset;
  }
}
</style>
