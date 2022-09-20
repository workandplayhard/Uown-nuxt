<template>
  <div
    class="hub-banner flex flex-col justify-center items-center relative px-8"
  >
    <img
      src="@/assets/images/HUB_BANNER_BALL1.png"
      class="absolute banner-ball1"
    />
    <img
      src="@/assets/images/HUB_BANNER_BALL2.png"
      class="absolute hidden banner-ball2 md:block"
    />
    <img
      src="@/assets/images/HUB_BANNER_BALL3.png"
      class="absolute banner-ball3"
    />
    <h1 class="text-5xl md:text-6xl font-extrabold z-1">The Hub</h1>
    <div class="text-xl md:text-3xl banner-content text-center z-1">
      The Hub is our knowledge center featuring useful and inspirational
      articles. Maybe add another sentence of context in here, describing what
      the articles theme around...
    </div>
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
.hub-banner {
  height: 583px;
}
.banner-ball1 {
  top: 43px;
  left: 36px;
  width: 85px;
  height: 81px;
}

.banner-ball3 {
  width: 158px;
  height: 171px;
  right: 30px;
  bottom: 66px;
}

@media (min-width: 768px) {
  .hub-banner {
    height: 887px;
  }
  .banner-content {
    width: 772px;
  }
  .banner-ball1 {
    top: 122px;
    left: 460px;
    width: 138px;
    height: 132px;
  }
  .banner-ball2 {
    bottom: 210px;
    left: 251px;
    width: 111px;
    height: 107px;
  }
  .banner-ball3 {
    top: 295px;
    right: 216px;
    width: 202px;
    height: 219px;
  }
}
</style>
