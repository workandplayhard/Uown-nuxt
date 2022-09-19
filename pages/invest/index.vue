<template>
  <div id="wrapper-main" class="fixed w-full h-screen-minus-header">
    <div
      id="wrapper"
      :style="$store.getters['invest/wrapperStyle']"
      class="h-full"
    >
      <InvestBanner class="section" />
      <LottieSection
        title="UOWN is a trusted partner,
        <br />experienced developer,
        <br />and a transparent platform."
        :cardsContent="lottieCardsContent1"
        class="section overflow-hidden xl:flex items-center"
      />
      <!-- wrapped CarouselTwo in a div instead of giving them the "section" class because doing so was causing problems with lazy hydration -->

      <CarouselTwo class="section" />
      <!-- <CarouselOne class="section" /> -->
      <DropdownsSection
        class="section bg-light"
        heading="The flexible way to secure property finance."
        para="We have created a platform where you can find the finance you need quickly and securely via a range of different investment vehicles."
        :accordionOArray="accordionTwo"
        imgSource="c1-img-0_pdedxl.png"
        imgSourceLg="c1-img-0-lg_vln2r4.png"
        :imgStyle="AccordionSectionImgStyle"
        :buttonOptions="{
          text: 'Learn more',
          link: '/borrow',
        }"
      />
      <threeCirclesSection
        title="Developments"
        :content="$store.state.invest.circlesSection1"
        :currentSlide="$store.state.invest.sectionCirclesOneCurrentSlide"
        note="Correct: June 2020. Past performance is not an indicator of future performance.<br>
1. Based on an investment of £1000 in all projects completed at the start and held until July 2020. Net of all fees."
        bgGray
        class="section"
      />
      <threeCirclesSection
        title="Buy-to-let"
        :content="$store.state.invest.circlesSection2"
        :currentSlide="$store.state.invest.sectionCirclesTwoCurrentSlide"
        circles2
        note="Correct: June 2020. Past performance is not an indicator of future performance.<br>1. Based on an investment of £1000 in all properties at the start and held until July 2020. Net of all fees."
        class="section"
      />
      <sectionLast class="section" />
      <appFooter class="min-h-screen flex flex-col justify-center" />
    </div>
  </div>
</template>

<script>
const InvestBanner = () => import("@/components/InvestBanner");
const LottieSection = () => import("@/components/LottieCardsSection");
const threeCirclesSection = () => import("@/components/ThreeCirclesSection");
const appFooter = () => import("@/components/AppFooter");
import mouseScroll from "@/mixins/mouseScroll";
import { setMobileWidthBooleanMixin } from "@/mixins/setMobileWidthBoolean";
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import { hydrateWhenVisible } from "vue-lazy-hydration";

let keyUpListenerAdded = false;

export default {
  components: {
    InvestBanner,
    LottieSection: hydrateWhenVisible(LottieSection),
    DropdownsSection: () => import("@/components/DropdownsSection"),
    // CarouselOne,
    CarouselTwo: hydrateWhenVisible(() => import("@/components/CarouselTwo")),
    threeCirclesSection: hydrateWhenVisible(threeCirclesSection),
    appFooter: hydrateWhenVisible(appFooter),
    sectionLast: hydrateWhenVisible(() =>
      import("@/components/InvestSectionLast")
    ),
  },

  head() {
    return {
      title: "Property Investment Opportunities UK",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN have property investment opportunities throughout the UK, all powered by property crowdfunding. Invest from as little as £1. Register and invest today.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/property-investments-banner.png?webp"),
          rel: "preload",
          as: "image",
          media: "(max-width: 639px)",
        },
        {
          href: require("@/assets/images/property-investments-banner-lg.png?webp"),
          rel: "preload",
          as: "image",
          media: "(min-width: 640px)",
        },
      ],
    };
  },

  data() {
    return {
      sticky: true,
      accordionTwo: [
        {
          id: 0,
          heading: "P2P Lending",
          para: "Financing powered by p2p investments from our crowdfunding platform.",
          link: "/invest/p2p",
          linkText: "See all P2P lending options",
        },
        {
          id: 1,
          heading: "Bridging Loans",
          para: "Fast access to property finance to overcome short term funding gaps.",
          link: "/borrow/bridging-loan",
          linkText: "See all bridging finance options",
        },
        {
          id: 2,
          heading: "Mezzanine Finance",
          para: "Property development finance with flexible repayment options.",
          link: "/borrow/mezzanine-finance",
          linkText: "See all mezzanine finance options",
        },
      ],
    };
  },

  methods: {
    next() {
      this.$store.commit("invest/next");
    },
    prev() {
      this.$store.commit("invest/prev");
    },
    prevSlide() {
      if (
        this.$store.state.invest.currentSection == 2 &&
        this.$store.state.invest.mobileWidth
      )
        this.$store.commit("invest/prevSlide", {
          carouselNumber: 1,
        });
      if (
        this.$store.state.invest.currentSection == 6 &&
        this.$store.state.invest.mobileWidth
      )
        this.$store.commit("invest/prevSlide", {
          carouselNumber: 2,
        });
    },
    nextSlide() {
      if (
        this.$store.state.invest.currentSection == 2 &&
        this.$store.state.invest.mobileWidth
      )
        this.$store.commit("invest/nextSlide", {
          carouselNumber: 1,
        });
      if (
        this.$store.state.invest.currentSection == 6 &&
        this.$store.state.invest.mobileWidth
      )
        this.$store.commit("invest/nextSlide", {
          carouselNumber: 2,
        });
    },
    // setScrollPosition(position) {
    //   this.$store.commit("invest/setScrollPosition", position);
    // },
    setMobileWidthBoolean(mobileWidthBoolean) {
      this.$store.commit("invest/setMobileWidthBoolean", mobileWidthBoolean);
    },
    // onScroll() {
    //   if (
    //     event.target.scrollHeight -
    //       event.target.scrollTop -
    //       event.target.clientHeight <
    //     1
    //   )
    //     this.setScrollPosition("bottom");
    //   // else console.log(0);
    //   else if (event.target.scrollTop == 0) this.setScrollPosition("top");
    // }
  },

  computed: {
    AccordionSectionImgStyle() {
      return {
        transform: "rotateY(180deg) translateX(-10vw)",
        padding: "2vw 0",
      };
    },
  },

  mounted() {
    if (!keyUpListenerAdded) {
      if (process.client)
        window.addEventListener("keyup", (e) => {
          if (e.keyCode == 38) this.prev();
          else if (e.keyCode == 40) this.next();
          else if (e.keyCode == 37) this.prevSlide();
          else if (e.keyCode == 39) this.nextSlide();
        });
      keyUpListenerAdded = true;
    }

    this.mouseScroll();

    let investPageWrapper = document.querySelector("#wrapper");
    let hammertime = new Hammer(investPageWrapper);
    hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

    hammertime.on("swipeup", (ev) => this.next());
    hammertime.on("swiperight", (ev) => this.nextSlide());
    hammertime.on("swipedown", (ev) => this.prev());
    hammertime.on("swipeleft", (ev) => this.prevSlide());
  },

  created() {
    this.setMobileWidthBooleanMixin();
  },

  mixins: [mouseScroll, setMobileWidthBooleanMixin, fullCanonicalURL],

  inject: ["lottieCardsContent1"],
};
</script>

<style lang='scss' scoped>
#wrapper-main {
  top: 3.5rem;
}

#wrapper {
  transition: transform 500ms ease-in-out;
}

.section {
  height: 100%;
  min-height: unset;
}
</style>