<template>
  <section class="pt-12 md:py-20 bg-no-repeat">
    <div class="container">
      <heading text="Why student property investment?" center />
      <div class="md:flex md:space-x-12 text-xl">
        <div>
          <p>Student accommodation is one of the best types of property to invest in because it offers industry-leading returns and is seen by those in the know as a safe investment. Even during the credit crunch in 2008 and onwards, student accommodation has shown real resilience to the recession where other property classes have not.</p>
          <p>If you pick the right area at the right time, investment in student property can provide great returns. It has become an increasingly common vehicle to secure healthy returns from property – just remember to keep an eye on how well the nearby universities are performing.</p>
        </div>
        <div>
          <p>Despite the fact that tuition fees have increased considerably over the last decade, the amount of university places actually grew. Over the same period, the international student population burgeoned as young people flocked to the UK for their education at our prestigious institutions.</p>
          <p>Once you’ve found a property in a popular student area, you should find that there’s constant demand from reliable, resilient tenants - even during periods of economic downturn. We have taken the hassle out of finding and vetting the ideal student property investment locations by curating student properties in Leeds for the UOWN platform.</p>
        </div>
      </div>
      <btn
        text="INVEST"
        underText="When you invest your capital is <a href='/risk-statement' class='link-underlined'>at risk</a>"
        outerLink
        link="https://app.uown.co/properties"
        invest
        class="text-center mt-8"
      />
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

section {
  background-image: url("~@/assets/images/ellipse-aquamarine.svg");
  background-size: 100vw 100vw;
  background-position-x: -60vw;
  background-position-y: -60vw;
}

@media (min-width: $sm) {
  section {
     background-size: 50vw 50vw;
    background-position-x: -32vw;
    background-position-y: -32vw;
  }
}
</style>