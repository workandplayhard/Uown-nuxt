<template>
  <header
    class="flex items-center justify-between fixed w-full top-0 px-6 md:px-12 py-4 bg-white leading-7 shadow-[0_7px_14px_rgba(0, 0, 0, 0.06)]"
  >
    <nuxt-link to="/" id="logo-wrapper" aria-label="logo">
      <img
        src="~/assets/images/logo.svg"
        alt
        class="logo hidden hidden md:block"
        width="92"
        height="21"
      />
      <img
        src="~/assets/images/logo-mobile.svg"
        alt
        class="logo md:hidden"
        width="40"
        height="21"
      />
    </nuxt-link>
    <div
      class="w-full h-650 lg:max-w-full max-w-md ml-20 lg:gap-6 gap-0 font-bold text-black links text-black text-xl fixed flex lg:flex-row flex-col lg:justify-center bg-none right-0 top-0 bottom-0 lg:items-center h-screen transition duration-500 ease-in-out transform lg:static lg:h-auto lg:py-0 lg:pt-0 lg:translate-x-0 space-y-0 lg:space-x-6 bg-white lg:bg-none"
      :class="classObj"
      v-click-outside="hideMenu"
    >
      <div class="bg-black p-5 lg:hidden">
        <nuxt-link to="/" id="logo-wrapper" aria-label="logo">
          <svg
            width="60"
            height="32"
            viewBox="0 0 60 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2642 18.5309C25.2642 21.8812 23.9333 25.0942 21.5643 27.4632C19.1954 29.8322 15.9823 31.163 12.6321 31.163C9.28186 31.163 6.06883 29.8322 3.69986 27.4632C1.33088 25.0942 0 21.8812 0 18.5309L0 1.09861C0.0203201 0.813985 0.14258 0.546228 0.344353 0.344456C0.546126 0.142683 0.813882 0.020423 1.09851 0.000102824H6.04105C6.18586 -0.00189209 6.3296 0.0251591 6.46378 0.0796579C6.59796 0.134157 6.71985 0.214998 6.82226 0.317403C6.92467 0.419809 7.00551 0.541703 7.06 0.675881C7.1145 0.81006 7.14156 0.953801 7.13956 1.09861V18.5309C7.15931 19.9829 7.7518 21.3682 8.78806 22.3854C9.29813 22.8774 9.90016 23.264 10.5597 23.5232C11.2193 23.7824 11.9235 23.9091 12.6321 23.896C13.3407 23.9091 14.0449 23.7824 14.7045 23.5232C15.364 23.264 15.9661 22.8774 16.4761 22.3854C17.5124 21.3682 18.1049 19.9829 18.1246 18.5309V1.09861C18.1226 0.953927 18.1497 0.81031 18.2041 0.676231C18.2585 0.542152 18.3392 0.420326 18.4414 0.317941C18.5437 0.215555 18.6654 0.134683 18.7994 0.0800945C18.9334 0.0255063 19.077 -0.00169237 19.2217 0.000102824H24.1642C24.309 -0.00189209 24.4528 0.0251591 24.5869 0.0796579C24.7211 0.134157 24.843 0.214998 24.9454 0.317403C25.0478 0.419809 25.1287 0.541703 25.1832 0.675881C25.2377 0.81006 25.2647 0.953801 25.2627 1.09861L25.2642 18.5309Z"
              fill="#71E5BD"
            />
            <path
              d="M48.7404 23.3415C47.4375 24.0619 45.9731 24.4398 44.4843 24.4398C42.9954 24.4398 41.531 24.0619 40.2281 23.3415C38.8508 22.5861 37.703 21.473 36.9056 20.1196C36.1082 18.7662 35.6909 17.2227 35.6977 15.6519C35.6977 13.285 36.6379 11.015 38.3116 9.34136C39.9852 7.6677 42.2552 6.72744 44.6221 6.72744C46.989 6.72744 49.259 7.6677 50.9327 9.34136C52.6063 11.015 53.5466 13.285 53.5466 15.6519C53.4712 17.238 52.9897 18.7781 52.1481 20.1246C51.3065 21.4711 50.1331 22.5788 48.7404 23.3415ZM44.4843 8.58842e-06C41.4156 8.58842e-06 38.4158 0.909977 35.8643 2.61484C33.3128 4.31971 31.3241 6.7429 30.1498 9.57798C28.9755 12.4131 28.6682 15.5327 29.2669 18.5424C29.8656 21.5521 31.3433 24.3167 33.5131 26.4866C35.683 28.6565 38.4476 30.1342 41.4573 30.7329C44.467 31.3316 47.5867 31.0243 50.4218 29.85C53.2569 28.6756 55.6801 26.687 57.3849 24.1355C59.0898 21.5839 59.9998 18.5842 59.9998 15.5155C60.0019 13.4774 59.602 11.4588 58.8231 9.57545C58.0441 7.69205 56.9013 5.98078 55.4602 4.53961C54.019 3.09843 52.3077 1.95565 50.4243 1.17669C48.5409 0.397719 46.5224 -0.00213691 44.4843 8.58842e-06Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
      </div>
      <headerLink
        v-for="(link, i) in links1"
        :key="i"
        :link="link.link"
        :text="link.text"
        :outerLink="link.outerLink"
        @link-clicked="hideMenu"
        :menu="link.menu"
        :class="{ line: link.text == 'Login' }"
        class="hover:bg-gray-300"
      />
    </div>
    <div
      class="adjust w-full lg:max-w-full max-w-md font-bold text-black flex flex-col-reverse lg:pt-0 pt-40 links text-black text-xl fixed justify-center right-0 top-0 bottom-0 items-center h-screen transition duration-500 ease-in-out py-16 transform lg:flex-row lg:static lg:h-auto lg:py-0 lg:translate-x-0 space-y-8 lg:space-y-0 lg:space-x-6"
      :class="classObj"
      v-click-outside="hideMenu"
    >
      <headerLink
        v-for="(link, i) in links2"
        :key="i + 4"
        :link="link.link"
        :text="link.text"
        :outerLink="link.outerLink"
        @link-clicked="hideMenu"
        :menu="link.menu"
        :class="{ background: link.text === 'Sign Up' }"
      />
    </div>
    <HeaderMenuToggle
      :active="this.$store.state.menuVisible"
      class="lg:hidden"
      @click.native="toggleMenu"
    />
    <transition name="fade">
      <!-- checked for page load because when dontShowAboutRisk was true, the element would be initially visible and would hide after some delay and it was also causing a client/server mismatch with v-if -->
      <div
        v-if="
          !$store.state.persist.dontShowAboutRisk && $store.state.pageLoaded
        "
        class="learn px-6 sm:px-8 md:px-6 py-2 absolute uppercase top-0 left-1/2 transform -translate-x-1/2 lg:-translate-x-56 xl:-translate-x-1/2 hover:text-white cursor-pointer text-sm font-family-bold text-center transition-colors duration-300 -z-1"
        @click="showAboutRisk"
      >
        learn about risk
      </div>
    </transition>
  </header>
</template>

<script>
import ClickOutside from "vue-click-outside";
import headerLink from "@/components/HeaderLink";

export default {
  components: {
    headerLink,
    HeaderMenuToggle: () => import("@/components/HeaderMenuToggle")
  },

  data() {
    return {
      links1: [
        {
          text: "Why Us?",
          link: "/invest"
        },
        // {
        //   text: "borrow",
        //   menu: [
        //     {
        //       text: "property finance",
        //       link: "/borrow",
        //     },
        //     {
        //       text: "mezzanine finance",
        //       link: "/borrow/mezzanine-finance",
        //     },
        //     {
        //       text: "bridging loans",
        //       link: "/borrow/bridging-loan",
        //     },
        //     {
        //       text: "alternative finance",
        //       link: "/borrow/alternative-finance",
        //     },
        //     {
        //       text: "new build developer loans",
        //       link: "/borrow/new-developments",
        //     },
        //   ],
        // },
        {
          text: "The hub",
          link: "/the-hub"
        },
        {
          text: "Help",
          link: "/help-centre"
        },
        {
          text: "Invest",
          link: "https://app.uown.co/invest",
          outerLink: true
        }
      ],
      links2: [
        {
          text: "Log In",
          link: "https://app.uown.co/login",
          outerLink: true
        },
        {
          text: "Sign Up",
          link: "https://app.uown.co/register",
          outerLink: true,
          backgroundStyle: "bg-backgroundColor"
        }
      ]
    };
  },

  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    hideMenu() {
      this.$store.commit("hideMenu");
    },
    showAboutRisk() {
      this.$store.commit("showAboutRisk");
    }
  },

  computed: {
    classObj() {
      return {
        "translate-x-full": !this.$store.state.menuVisible,
        shadow: this.$store.state.menuVisible,
        "iPad-pro-hide": !this.$store.state.menuVisible
      };
    }
  },
  directives: {
    ClickOutside
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

header {
  z-index: 2;
  height: 83px;
  font-family: "Plus Jakarta";
  // box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.06);
  // shadow-[0_14px_7px_14px_rgba(0,0,0,0.06)]

  .text-xl {
    font-size: 1.25rem !important;
  }

  .text-black {
    color: black !important;
  }
}

.learn {
  background: $yellow;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  &:hover {
    background-color: black;
  }
}

.shadow {
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
}

.links {
  width: 80vw;
  font-size: 1.3rem;
}

@media (min-width: $lg) and (orientation: landscape) {
  .pt-0 {
    padding-top: 0 !important;
  }
}

@media (max-width: $lg) {
  .pt-35 {
    padding-top: 35rem;
  }
}

.background {
  border-radius: 100px;
  width: 146px;
  height: 54px;
  padding: 13px 0px;
  background: #71e5bd;
  text-align: center;
}

@media (min-width: $lg) and (orientation: landscape) {
  .links {
    font-size: 0.8rem;
    width: unset;
    box-shadow: none;
  }
}

// iPad Pro
@media (min-width: $lg) {
  .iPad-pro-hide {
    background: none;
  }
}
@media (width: 1024px) and (height: 1366px) {
  .links {
    position: fixed;
    display: flex;
    flex-direction: column;

    &.iPad-pro-hide {
      transform: translateX(100%);
    }
  }

  .learn {
    transform: translateX(-50%);
  }
}

.adjust {
  height: 100px;
  background: none;
  box-shadow: none;
  top: 400px;
}

.h-650 {
  height: 650px;
}
</style>
