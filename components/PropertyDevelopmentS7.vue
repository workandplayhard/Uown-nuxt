<template>
  <section class="-z-1 lg:py-64">
    <div class="container lg:grid gap-12 grid-cols-2 relative">
    <img src="@/assets/images/rounded-box-aquamarine.svg" alt class="u absolute hidden lg:block" />
      <div>
        <heading text="The UOWN pledge to you." />
        <p
          class="text-lg"
        >Once you have made your investment, we oversee the project from inception through construction, furnishing and sale. Our tried and tested process is in place to ensure that our investors get the best deal for their money. Building contracts all go out to tender with highly detailed specifications to minimise potential disagreements with contractors. We also aim to secure returns to UOWNers ahead of developers to add an extra layer of safety to investors.</p>
      </div>
      <div
        class="circle z-1 relative bg-light rounded-full overflow-hidden bg-no-repeat bg-contain hidden lg:block"
      >
        <h1
          class="circle-heading text-4xl font-family-bold text-center opacity-60 relative"
        >Here to help you grow.</h1>
        <div class="x-line absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-12"></div>
      </div>
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";

export default {
  components: {
    heading,
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.circle {
  box-shadow: 0 0 25px 4px rgba(0, 0, 0, 0.12);
  height: 22rem;
  width: 22rem;
  background-image: url(~@/assets/images/cut-circle.jpg);

  &-heading {
    top: 39%;
  }
}

@media (min-width: $lg) {
  section {
    margin-top: -25rem;
  }
  .container {
    margin-top: 10rem;
  }
  .u {
    transform: rotate(-235deg) scale(1.75);

    width: 50%;
    right: -51%;
    top: -50%;
    padding-top: 35rem;
  }
}
</style>