<template>
  <div class="main py-6">
    <div class="container sm:grid items-center overflow-hidden">
      <div class>
        <heading text="Charity" class="mb-2" />
        <p
          class="text-2xl mb-4"
        >At UOWN we don’t only want to provide the opportunity to invest, we also want to provide the opportunity to give charity.</p>
        <p
          class="text-2xl mb-4"
        >We list charity projects in conjunction with our carefully vetted charity partners. We believe that our partners are making a positive impact on the world, and we want to be able provide them a space to list projects that we can all get behind.</p>
        <BtnRounded
          text="Contribute"
          link="https://app.uown.co/causes"
          outerLink
          class="mt-4 text-xl"
        />
      </div>
      <cld-image
        public-id="ETHOS_Charity_q40mg5.png"
        secure="true"
        dpr="1.5"
        responsive="width"
        width="auto"
        crop="fill"
        fetchFormat="auto"
        class="transform scale-125"
      >
        <cld-placeholder type="vectorize"></cld-placeholder>
      </cld-image>
    </div>
  </div>
</template>

<script>
const BtnRounded = () => import( "../components/BtnRounded");
import AppImage from "../components/AppImage";
import heading from "../components/Heading";
export default {
  name: "EthosCharity",
  components: {
    BtnRounded,
    AppImage,
    heading
  }
};
</script>

<style lang='scss' scoped>
.main {
  background-color: #f4f4f4;
}
.container {
  grid-template-columns: 1.25fr 1fr;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1.3fr;
  }
}
</style>