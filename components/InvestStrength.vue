<template>
  <div
    class="bg-black text-white flex flex-col justify-around items-center xl:px-16 py-20 lg:px-16"
  >
    <div class="strength-text-container text-center">
      <h3 class="text-3xl xl:text-5xl lg:text-4xl font-bold">
        Strength in Numbers
      </h3>
      <div class="text-base xl:text-xl lg:text-lg mt-4">
        Unlike some other platforms our background is property. We have all the
        necesarry skills, knowledge and expertise to take care of all the
        details.
      </div>
    </div>
    <div
      class="strength-cards grid-cols-3 xl:gap-6 lg:gap-4 w-full hidden lg:grid mt-10"
    >
      <InvestStrengthCard title="£217k" strength_type="Paid out" />
      <InvestStrengthCard title="15%" strength_type="Average Profit" />
      <InvestStrengthCard title="5.5%" strength_type="Paid out" />
    </div>
    <InvestStrengthCarousel class="block lg:hidden" />
  </div>
</template>
<script>
import InvestStrengthCard from "./InvestStrengthCard.vue";
import InvestStrengthCarousel from "./InvestStrengthCarousel.vue";
export default {
  data() {
    return {};
  },
  components: { InvestStrengthCard, InvestStrengthCarousel }
};
</script>
<style>
.strength-text-container {
  width: 345px;
}

@media (min-width: 768px) {
  .strength-text-container {
    width: 497px;
  }
}

@media (min-width: 1024px) {
  .strength-text-container {
    width: 850px;
  }
}
</style>
