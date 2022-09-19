<template>
  <div>
    <Banner2
      class="mt-from-header"
      title="Our Ethos."
      para="By allowing people to invest in property and receive any rental income monthly."
      btnLink="/topic/getting-started"
      btnText="Learn more"
    />
    <LazyHydrate when-visible>
      <lottie
        title="UOWN is a trusted partner,
          <br />experienced developer,
          <br />and a transparent platform."
        :cardsContent="lottieCardsContent1"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <TextAndTabbedNav class="mt-24 mb-12" />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <textImgU
        :imgOptions="{
          source: 'ethos-developments_qo98zr.png',
          scale: 0.7
        }"
        img="ethos-developments_qo98zr.png"
        title="Developments"
        btnText="Developments"
        btnLink="https://app.uown.co/properties"
        btnOuterLink
        class="sm:-mt-12"
      >
        <p class="text-2xl mb-4">
          Our developments follow the same three principles listed above. We
          operate an open and responsible process, designed to protect our
          investors and ensure that they get the best deal possible. We do this
          to give investors access to opportunities regardless of experience or
          circumstance. We are committed to designing, developing and listing
          properties that people want to live in.
        </p>
      </textImgU>
    </LazyHydrate>
    <LazyHydrate when-visible>
      <EthosCharity class="sm:-mt-20" />
    </LazyHydrate>
  </div>
</template>

<script>
const Banner2 = () => import("../components/Banner2");
const lottie = () => import("@/components/LottieCardsSection");
const TextAndTabbedNav = () => import("../components/TextAndTabbedNav");
const EthosCharity = () => import("../components/EthosCharity");
const textImgU = () => import("../components/TextImgU");
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import LazyHydrate from "vue-lazy-hydration";

export default {
  components: {
    Banner2,
    TextAndTabbedNav,
    EthosCharity,
    textImgU,
    lottie,
    LazyHydrate,
  },

  head() {
    return {
      title: "Our Ethos",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "We believe in making property investment achievable for everyone. Click to read more about our property crowdfunding product and our core values.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require('@/assets/images/ethos-hero-mobile.png?webp'),
          rel: "preload",
          as: "image",
          media: "(max-width: 639px)",
        },
        {
          href: require('@/assets/images/ethos-hero.png?webp'),
          rel: "preload",
          as: "image",
          media: "(min-width: 640px)",
        },
      ],
    };
  },

  inject: ["lottieCardsContent1"],

  mixins: [fullCanonicalURL],
};
</script>

<style>
</style>