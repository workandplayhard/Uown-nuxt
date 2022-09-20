<template>
  <header
    class="
      flex
      items-center
      justify-between
      fixed
      w-full
      top-0
      px-6
      md:px-12
      py-4
      bg-white
      leading-7
      shadow-[0_7px_14px_rgba(0, 0, 0, 0.06)]
    "
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
      class="
        ml-20
        gap-6
        font-bold
        text-black
        links
        text-black
        text-xl
        fixed
        flex
        lg:flex-row
        flex-col
        justify-center
        bg-none
        right-0
        top-0
        bottom-0
        items-center
        h-screen
        transition
        duration-500
        ease-in-out
        py-16
        transform
        lg:static
        lg:h-auto
        lg:py-0
        lg:translate-x-0
        space-y-8
        lg:space-y-0 lg:space-x-6
        bg-white
        lg:bg-none
      "
      :class="classObj"
      v-click-outside="hideMenu"
    >
      <headerLink
        v-for="(link, i) in links1"
        :key="i"
        :link="link.link"
        :text="link.text"
        :outerLink="link.outerLink"
        @link-clicked="hideMenu"
        :menu="link.menu"
        :class="{ line: link.text == 'Login' }"
      />
    </div>
    <div
      class="
        font-bold
        text-black
        flex
        flex-col
        md:pt-0
        pt-35
        links
        text-black
        text-xl
        fixed
        justify-center
        right-0
        top-0
        bottom-0
        items-center
        h-screen
        transition
        duration-500
        ease-in-out
        py-16
        transform
        lg:flex-row
        lg:static
        lg:h-auto
        lg:py-0
        lg:translate-x-0
        space-y-8
        lg:space-y-0 lg:space-x-6
      "
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
        class="
          learn
          px-6
          sm:px-8
          md:px-6
          py-2
          absolute
          uppercase
          top-0
          left-1/2
          transform
          -translate-x-1/2
          lg:-translate-x-56
          xl:-translate-x-1/2
          hover:text-white
          cursor-pointer
          text-sm
          font-family-bold
          text-center
          transition-colors
          duration-300
          -z-1
          
        "
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
</style>
