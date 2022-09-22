<template>
  <div
    class="flex justify-center items-center flex-col color-black invest-banner bg-center bg-cover"
  >
    <h1 class="banner-title font-bold text-center">The power of us</h1>
    <div class="text-base md:text-2xl banner-content text-center color-black">
      UOWN makes property investing simple accessible and easy words.
    </div>
    <div class="text-base md:text-2xl banner-content text-center color-black">
      Rated 4.6/5 on Trustpilot.
    </div>
    <button
      class="btn-green rounded-100 color-black mt-10 flex justify-center items-center font-bold text-xl"
    >
      Get Started
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.invest-banner {
  background-image: url("../assets/images/INVEST_BANNER.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
}

.banner-title {
  font-size: 72px;
}

.btn-green {
  background-color: #71e5bd;
  height: 54px;
  width: 175px;
}

@media (max-width: 1023px) {
  .banner-title {
    font-size: 48px;
  }

  .btn-green {
    height: 50px !important;
    width: 162px !important;
  }
}

@media (max-width: 767px) {
  .banner-title {
    width: 292px;
  }

  .banner-content {
    width: 300px;
  }
  .btn-green {
    height: 48px !important;
    width: 153px !important;
  }
}

.rounded-100 {
  border-radius: 100px;
}
</style>
