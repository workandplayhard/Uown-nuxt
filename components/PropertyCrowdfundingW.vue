<template>
  <section>
    <div class="container md:grid grid-cols-2 gap-6 lg:gap-12 py-12 items-center relative">
      <div>
        <heading text="Who or what is UOWN?" />
        <p
          class="text-xl"
        >UOWN is simply lots of people all clubbing together to fund something bigger. In this case, that’s properties. Until recently, investing in property developments was only available to a small number of people with large sums of money. Each active member of the UOWN community (a UOWNer) owns shares in one or more properties, alongside other UOWNers.</p>
        <p
          class="text-xl"
        >So property crowdfunding investment is not something to be afraid of, it’s just a group of like minded people pooling resources.</p>
        <btn
          text="INVEST"
          outerLink
          link="https://app.uown.co/properties"
          underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'>at risk?</a>"
          invest
          class="mt-8"
        />
      </div>
      <div class="hidden md:block">
        <cld-image
          public-id="BALL_UO_kbmulp.png"
          secure="true"
          dpr="1.5"
          responsive="width"
          width="auto"
          crop="fill"
          fetchFormat="auto"
        >
          <cld-placeholder type="vectorize"></cld-placeholder>
        </cld-image>
      </div>
      <img src="@/assets/images/W-aquamarine.svg" alt class="w absolute -z-1" />
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import btn from "@/components/BtnRounded";

export default {
  components: {
    heading,
    btn,
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.w {
  transform: translate(70%, -85%) rotate(-15deg) scale(1.25);
  top: 0;
}

@media (min-width: $md) {
  .w {
    transform: translateY(-50%) rotate(-15deg) scale(1.5);
    top: 50%;
    width: 50%;
    right: -25%;
  }
}
</style>