<template>
  <section class="lg:-mt-64">
    <div class="container lg:grid grid-cols-2 gap-12 relative items-start">
      <div class="img hidden md:block absolute lg:static left-0">
        <cld-image
          public-id="q-mark_lynrjd.png"
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
        <heading text="Why invest with UOWN?" />
        <whyInvest />
      </div>
      <img
        src="@/assets/images/rounded-box-aquamarine.svg"
        alt
        class="u -z-1 absolute hidden md:block"
      />
    </div>
  </section>
</template>

<script>
import heading from "@/components/HeadingWithLine";
import appImage from "@/components/AppImage";
import whyInvest from "@/components/WhyInvestWithUown";

export default {
  components: {
    heading,
    appImage,
    whyInvest,
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

@media (min-width: $md) {
  .u {
    transform: rotate(98deg);
    bottom: -68%;
    left: -50%;
  }

  .container {
    padding-bottom: 20rem;
  }

  .img {
    width: 18rem;
    bottom: -2rem;
  }
}

@media (min-width: $lg) {
  section {
    margin-top: 30%;
  }

  .container {
    // margin-top: 10rem;
    padding-bottom: 0;
  }

  .u {
    transform: rotate(98deg) scale(1.75);
    width: 50%;
    bottom: unset;
    left: 15%;
    padding-top: 35rem;
  }

  .img {
    width: 100%;
  }
}
</style>