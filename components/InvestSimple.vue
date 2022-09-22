<template>
  <div
    class="lg:grid lg:grid-cols-2 container lg:w-full lg:mx-0 lg:px-0 lg:max-w-full md:px-16 flex flex-col justify-around"
  >
    <div
      class="order-2 lg:order-1 simple-image w-full bg-center bg-cover"
    ></div>
    <div
      class="lg:my-auto lg:px-40 text-center lg:text-left md:px-4 order-1 lg:order-2"
    >
      <h3 class="lg:text-5xl font-bold md:text-4xl text-3xl">
        Simple is powerful
      </h3>
      <div class="lg:text-2xl md:text-xl md:mt-8 lg:mt-1">
        We make it as easy as possible for you to start investing. Unlike some
        other platforms, our background is in property. We have the skills and
        expertise to take care of all the details.
      </div>
      <button
        class="bg-black px-6 py-3 text-xl font-bold mt-8 text-white rounded-40 hidden lg:block"
      >
        Find out more
      </button>
    </div>
    <button
      class="bg-black px-4 py-2 text-base md:text-xl mt-4 text-white rounded-40 block lg:hidden mx-auto order-last"
    >
      Find out more
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
.rounded-40 {
  border-radius: 40px;
}

.simple-image {
  background-image: url("@/assets/images/INVEST_SIMPLE.png");
  background-position: 100% 100%;
  border-radius: 12px;
  height: 397px;
}

@media (min-width: 1024px) {
  .simple-image {
    border-radius: 0px !important;
    height: 100% !important;
  }
}

@media (min-width: 768px) {
  .simple-image {
    border-radius: 30px;
    height: 442px;
  }
}
</style>
