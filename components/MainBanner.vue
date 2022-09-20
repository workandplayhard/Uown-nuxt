<template>
  <div class="banner relative bg-no-repeat bg-cover bg-center">
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
        class="text-4xl md:text-5xl lg:text-7xl mx-auto px-6 font-family-bold pt-36"
      >
        A home for your money.
      </h1>
      <div class="text-xl sm:text-2xl my-5 leading-snug">
        <p>UOWN makes property investing simple, accessible and easy.</p>
        <p>Rated 4.7/5 on Trustpilot.</p>
      </div>
      <EmailAndButton1 class="home-email" stackedOnMobile roundedBtn />
    </div>
  </div>
</template>

<script>
import EmailAndButton1 from "./EmailAndButton1.vue";
const BtnRounded = () => import("../components/BtnRounded");
export default {
  name: "MainBanner",
  components: {
    BtnRounded,
    EmailAndButton1
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.banner {
  background-image: url(~@/assets/images/bg-homepage-section-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;

  .pt-36 {
    padding-top: 9rem;
  }
}
</style>
