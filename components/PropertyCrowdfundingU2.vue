<template>
  <section class="lg:pt-64 lg:-mt-64">
    <div class="container lg:grid grid-cols-2 gap-12 relative items-start">
      <div class="hidden lg:block">
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
      <div>
        <heading text="Who or what is UOWN?" />
        <p
          class="text-xl"
        >UOWN is simply lots of people all clubbing together to fund something bigger. In this case, that’s properties. Until recently, property investment was only available to a small number of people with large sums of money. Each active member of the UOWN community (a UOWNer) owns shares in one or more properties, alongside other UOWNers.</p>
        <p
          class="text-xl"
        >So property crowdfunding investment is not something to be afraid of, it’s just a group of like minded people pooling resources.</p>
        <btn
          text="INVEST"
          outerLink
          link="https://app.uown.co/properties"
          underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'> at risk</a>"
          invest
          class="mt-8"
        />
      </div>
      <img
        src="@/assets/images/rounded-box-aquamarine.svg"
        alt
        class="u -z-1 absolute hidden lg:block"
      />
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import btn from "@/components/BtnRounded";
import appImage from "@/components/AppImage";

export default {
  components: {
    heading,
    btn,
    appImage,
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

@media (min-width: $lg) {
  .container {
    margin-top: 10rem;
  }
  
  .u {
    transform: translateY(-60%) rotate(30deg) scale(1.5);
    width: 50%;
    left: -10%;
    padding-top: 35rem;
  }
}
</style>