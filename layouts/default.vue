<template>
  <div>
    <AppHeader />
    <AboutRisk v-show="$store.state.aboutRiskVisible" />
    <nuxt />
    <AppFooter
      v-if="this.$route.path !== '/' && this.$route.path !== '/invest'"
    />
    <emailPopup2 v-if="showEmailPopup" @hide="showEmailPopup = false" />
    <cookieAlert v-if="$store.state.persist.cookieAlertVisible && $store.state.pageLoaded" />
    <portal-target name="modal"></portal-target>
  </div>
</template>

<script>
import { hydrateWhenVisible } from "vue-lazy-hydration";

export default {
  components: {
    AppHeader: () => import("@/components/AppHeader"),
    AppFooter: hydrateWhenVisible(() => import("@/components/AppFooter")),
    cookieAlert: hydrateWhenVisible(() => import("@/components/CookieAlert")),
    AboutRisk: () => import("@/components/AboutRisk"),
    emailPopup2: hydrateWhenVisible(() => import("@/components/EmailPopup2")),
  },

  data() {
    return {
      showEmailPopup: false,
      emailPopupRoutes: [
        "/borrow/alternative-finance",
        "/borrow/bridging-loan",
        "/borrow/mezzanine-finance",
        "/borrow/new-developments",
        "/invest/ifisa",
        "/invest/p2p",
        "/invest/retirement",
        "/invest/retirement/sipp",
        "/invest/retirement/ssas",
      ],
    };
  },

  computed: {
    valuesToWatch() {
      return {
        route: this.$route,
        pageLoaded: this.$store.state.pageLoaded,
      };
    },
  },

  created() {
    if (process.client)
      window.addEventListener("load", () => {
        this.$store.commit('setPageLoaded');
      });
  },

  watch: {
    valuesToWatch: {
      immediate: true,
      handler(newVal) {
        if (newVal.pageLoaded)
          this.showEmailPopup = this.emailPopupRoutes.includes(newVal.route.path)
      },
    },
  },

  provide: {
    lottieCardsContent1: [
      {
        animationData: require("@/assets/lottie/ALL_PAGES_1_TRUSTPILOT.json"),
        text:
          "4.7 <a href='https://uk.trustpilot.com/review/uown.co' target='_blank' class='border-b border-black opacity-50 hover:opacity-100'>Trustpilot</a> Score",
      },
      {
        animationData: require("@/assets/lottie/ALL_PAGES_2_TRUSTED_BY_OVER.json"),
        text: "Trusted by over 3000+ users",
      },
      {
        animationData: require("@/assets/lottie/ALL_PAGES_3_PROJECTS_TOTALLING.json"),
        text: "Projects totalling £3,500,000+",
      },
      {
        animationData: require("@/assets/lottie/ALL_PAGES_4_PARKLANE.json"),
        text:
          "Expertise provided by The <a href='https://theparklanegroup.com/' class='border-b border-black opacity-50 hover:opacity-100' target='_blank'>Parklane</a> Group",
      },
    ],

    lottieCardsContent2: [
      {
        animationData: require("@/assets/lottie/ALL_PAGES_5_MAXIMUM_LOAN.json"),
        text: "70% maximum LTV",
      },
      {
        animationData: require("@/assets/lottie/ALL_PAGES_6_FINANCE_FROM.json"),
        text: "Finance from £25,000 - £5,000,000",
      },
      {
        animationData: require("@/assets/lottie/ALL_PAGES_7_AVG_FUNDING_TIME.json"),
        text: "Avg funding time of 28 days",
      },
      {
        animationData: require("@/assets/lottie/ALL_PAGES_8_48_HOURS.json"),
        text: "Preliminary decisions reached in 48 hours",
      },
    ],
  },
};
</script>