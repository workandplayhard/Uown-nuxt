<template>
  <div
    class="strength-card bg-white w-full text-black lg:py-10 md:py-6 py-4 flex flex-col"
  >
    <h4 class="card-title text-center font-bold text-4xl">{{ title }}</h4>
    <div class="lg:text-4xl text-center font-bold md:text-xl text-sm">
      {{ strength_type }}
    </div>
    <img src="@/assets/images/INVEST_BALL.png" class="ball-image mx-auto" />
    <div
      class="text-center lg:text-2xl lg:px-16 md:text-sm md:px-6 mt-auto text-xs px-4 font-bold"
    >
      On our journey so far we have paid out a total of £217k to UOWNers.This
      has spanned across a total of.
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    },
    strength_type: {
      type: String
    },
    title: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
<style>
.strength-card {
  height: 248px;
  border-radius: 14px;
}

.ball-image {
  width: 85px !important;
  height: 86px;
}

@media (min-width: 768px) {
  .strength-card {
    height: 342px;
    border-radius: 20px;
  }
  .ball-image {
    width: 119px !important;
    height: 109px;
  }
}

@media (min-width: 1024px) {
  .strength-card {
    border-radius: 20px;
    height: 658px;
  }
  .card-title {
    font-size: 128px;
  }
  .ball-image {
    width: 237px !important;
    height: 219px;
  }
}
</style>
