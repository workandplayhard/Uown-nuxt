<template>
  <div
    class="bg-black text-white flex flex-col justify-around items-center lg:px-40 py-20 md:px-16"
  >
    <div class="strength-text-container text-center">
      <h3 class="text-3xl lg:text-5xl md:text-4xl font-bold">
        Strength in Numbers
      </h3>
      <div class="text-base lg:text-2xl md:text-lg mt-4">
        Unlike some other platforms our background is property. We have all the
        necesarry skills, knowledge and expertise to take care of all the
        details.
      </div>
    </div>
    <div
      class="strength-cards grid-cols-3 lg:gap-6 md:gap-4 w-full hidden md:grid mt-10"
    >
      <InvestStrengthCard title="£217k" strength_type="Paid out" />
      <InvestStrengthCard title="15%" strength_type="Average Profit" />
      <InvestStrengthCard title="5.5%" strength_type="Paid out" />
    </div>
    <InvestStrengthCarousel class="block md:hidden" />
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
