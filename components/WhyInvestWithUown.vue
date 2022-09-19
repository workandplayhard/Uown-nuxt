<template>
  <div>
    <div class="space-y-4">
      <checkText
        text="Reduced risk* investment in an area of Leeds that is proven and profitable."
      />
      <checkText
        text="Clear and transparent information including whether the property is let for the next year and the expected net yield on your investment."
      />
      <checkText text="Larger rental yield % than the national average." />
    </div>
    <appImage
      :source="require('@/assets/images/trustpilot.jpg')"
      :sourceWebp="require('@/assets/images/trustpilot.jpg?webp')"
      class="rating my-8"
    />
    <p
      class="text-xl"
    >So, what are you waiting for? Join the UOWNERS today, register an account and invest.</p>
    <div class="sm:flex mt-8">
      <btn
        text="INVEST"
        outerLink
        invest
        link="https://app.uown.co/properties"
        underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'> at risk</a>"
        class="sm:mr-4"
      />
      <p class="text-xs opacity-75">* UOWN reduces the risk around its investments by following strict Due Diligence which includes evidencing past rental performance going back a number of years.</p>
    </div>
  </div>
</template>

<script>
import btn from "@/components/BtnRounded";
import checkText from "@/components/CheckText";
import appImage from "@/components/AppImage";

export default {
  components: {
    btn,
    checkText,
    appImage,
  },
};
</script>

<style scoped>
.rating {
   max-width: 20rem;
}
</style>