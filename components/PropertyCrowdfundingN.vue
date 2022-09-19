<template>
  <section>
    <div class="container lg:grid grid-cols-2 gap-x-6 relative items-center">
      <div>
        <heading text="Who or what is UOWN?" />
        <p class="text-xl">
          UOWN is simply lots of people all clubbing together to fund something
          bigger. In this case, that’s properties. Until recently, property
          investment was only available to a small number of people with large
          sums of money. Each active member of the UOWN community (a UOWNer)
          owns shares in one or more properties, alongside other UOWNers.
        </p>
        <p class="text-xl">
          So property crowdfunding investment is not something to be afraid of,
          it’s just a group of like minded people pooling resources.
        </p>
        <btn
          text="INVEST"
          outerLink
          invest
          link="https://app.uown.co/properties"
          underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'> at risk</a>"
          class="mt-8"
        />
      </div>
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
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import btn from "@/components/BtnRounded";
import appImage from "@/components/AppImage";

export default {
  components: {
    btn,
    appImage,
    heading,
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/css/_variables';

section {
  // padding: 10% 0 25% 0;
}

@media (min-width: $lg) {
  .container::before {
    content: "";
    position: absolute;
    background-image: url(~@/assets/images/rounded-box-aquamarine.svg);
    top: 0;
    right: -25%;
    bottom: 0;
    width: 50%;
    background-size: 100%;
    background-position-x: right;
    background-repeat: no-repeat;
    transform: translateY(-10%) rotate(-150deg) scale(1.75);
    z-index: -1;
  }
}
</style>