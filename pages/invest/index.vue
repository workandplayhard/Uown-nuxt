<template>
  <div id="wrapper-main" class="fixed w-full h-screen-minus-header">
    <div
      id="wrapper"
      :style="$store.getters['invest/wrapperStyle']"
      class="h-full"
    >
      <InvestBanner class="section" />
      <LottieSection
        title="UOWN is a trusted partner, experienced developer, and a transparent platform."
        :cardsContent="lottieCardsContent1"
        class="overflow-hidden xl:flex items-center bg-fb"
      />
      <InvestSimple class="section" />
      <!-- wrapped CarouselTwo in a div instead of giving them the "section" class because doing so was causing problems with lazy hydration -->
      <InvestStrength />
      <Journey />
      <appFooter class="flex flex-col justify-center" />
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
import InvestSimple from "~/components/InvestSimple.vue";
import InvestStrength from "~/components/InvestStrength.vue";

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
    Journey: () => import("@/components/Journey.vue"),
    sectionLast: hydrateWhenVisible(() =>
      import("@/components/InvestSectionLast")
    ),
    InvestSimple,
    InvestStrength
  },

  head() {
    return {
      title: "Property Investment Opportunities UK",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN have property investment opportunities throughout the UK, all powered by property crowdfunding. Invest from as little as £1. Register and invest today."
        }
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/property-investments-banner.png?webp"),
          rel: "preload",
          as: "image",
          media: "(max-width: 639px)"
        },
        {
          href: require("@/assets/images/property-investments-banner-lg.png?webp"),
          rel: "preload",
          as: "image",
          media: "(min-width: 640px)"
        }
      ]
    };
  },

  data() {
    return {
      sticky: true,
      accordionTwo: [
        {
          id: 0,
          heading: "P2P Lending",
          para:
            "Financing powered by p2p investments from our crowdfunding platform.",
          link: "/invest/p2p",
          linkText: "See all P2P lending options"
        },
        {
          id: 1,
          heading: "Bridging Loans",
          para:
            "Fast access to property finance to overcome short term funding gaps.",
          link: "/borrow/bridging-loan",
          linkText: "See all bridging finance options"
        },
        {
          id: 2,
          heading: "Mezzanine Finance",
          para: "Property development finance with flexible repayment options.",
          link: "/borrow/mezzanine-finance",
          linkText: "See all mezzanine finance options"
        }
      ]
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
          carouselNumber: 1
        });
      if (
        this.$store.state.invest.currentSection == 6 &&
        this.$store.state.invest.mobileWidth
      )
        this.$store.commit("invest/prevSlide", {
          carouselNumber: 2
        });
    },
    nextSlide() {
      if (
        this.$store.state.invest.currentSection == 2 &&
        this.$store.state.invest.mobileWidth
      )
        this.$store.commit("invest/nextSlide", {
          carouselNumber: 1
        });
      if (
        this.$store.state.invest.currentSection == 6 &&
        this.$store.state.invest.mobileWidth
      )
        this.$store.commit("invest/nextSlide", {
          carouselNumber: 2
        });
    },
    // setScrollPosition(position) {
    //   this.$store.commit("invest/setScrollPosition", position);
    // },
    setMobileWidthBoolean(mobileWidthBoolean) {
      this.$store.commit("invest/setMobileWidthBoolean", mobileWidthBoolean);
    }
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
        padding: "2vw 0"
      };
    }
  },

  mounted() {
    if (!keyUpListenerAdded) {
      if (process.client)
        window.addEventListener("keyup", e => {
          if (e.keyCode == 38) this.prev();
          else if (e.keyCode == 40) this.next();
          else if (e.keyCode == 37) this.prevSlide();
          else if (e.keyCode == 39) this.nextSlide();
        });
      keyUpListenerAdded = true;
    }

    // this.mouseScroll();

    let investPageWrapper = document.querySelector("#wrapper");
    let hammertime = new Hammer(investPageWrapper);
    hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

    hammertime.on("swipeup", ev => this.next());
    hammertime.on("swiperight", ev => this.nextSlide());
    hammertime.on("swipedown", ev => this.prev());
    hammertime.on("swipeleft", ev => this.prevSlide());
  },

  created() {
    this.setMobileWidthBooleanMixin();
  },

  mixins: [mouseScroll, setMobileWidthBooleanMixin, fullCanonicalURL],

  inject: ["lottieCardsContent1"]
};
</script>

<style lang="scss" scoped>
html,
body {
  overflow-y: hidden;
}

#wrapper-main {
  top: 3.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-align: none !important;
  height: calc(100vh - 3.5rem);

  #wrapper {
    transition: transform 500ms ease-in-out;
  }
}

.section {
  height: 100%;
  min-height: unset;
}

.bg-fb {
  background: #fbfbfb !important;
}
</style>
