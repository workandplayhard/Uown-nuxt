<template>
  <div id="wrapper-main" class="fixed w-full">
    <div id="wrapper" class="h-full" :style="$store.getters.wrapperStyle">
      <MainBanner class="section" />
      <ProgressTab />
      <!-- <SectionPhones class="section" /> -->
      <DropdownsSection
        class="section"
        heading="Rest Assured"
        para="Your security and trust are important to us. We’re committed to protecting your account with the highest standards of security available."
        imgSource="way-to-invest_li7jf4.png"
        imgSourceLg="way-to-invest-lg_zglaej.png"
        :buttonOptions="{
          text: 'Find out more',
          link: 'https://app.uown.co/register',
          outerLink: true
        }"
      />

      <StackedCarouselSection class="section" />
      <!-- <SectionSeven class="section" /> -->
      <Journey />

      <appFooter class="flex flex-col justify-center" />
    </div>
  </div>
</template>

<script>
import mouseScroll from "@/mixins/mouseScroll";
import { setMobileWidthBooleanMixin } from "@/mixins/setMobileWidthBoolean";
import { hydrateWhenVisible, hydrateWhenIdle } from "vue-lazy-hydration";
import fullCanonicalURL from "@/mixins/fullCanonicalURL";
import ProgressTab from "../components/ProgressTab.vue";
import Journey from "~/components/Journey.vue";

let keyUpListenerAdded = false;

export default {
  components: {
    MainBanner: () => import("../components/MainBanner"),
    ProgressTab: () => import("../components/ProgressTab.vue"),
    // SectionPhones: hydrateWhenVisible(() =>
    //   import("@/components/SectionPhones")
    // ),
    DropdownsSection: () => import("@/components/DropdownsSection"),
    StackedCarouselSection: hydrateWhenIdle(() =>
      import("../components/StackedCarouselSection")
    ),
    // SectionSeven: hydrateWhenVisible(() =>
    //   import("../components/SectionSeven")
    // ),
    Journey: () => import("../components/Journey.vue"),
    appFooter: hydrateWhenVisible(() => import("../components/AppFooter")),
    ProgressTab,
    Journey
  },

  head() {
    return {
      title: "Flexible Property Investment and Finance",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "UOWN is the new way to invest in and finance property, all made possible by our property crowdfunding platform. Click to invest or secure finance now."
        }
      ],
      link: [
        {
          href: require("@/assets/images/homepage-banner.png?webp"),
          rel: "preload",
          as: "image",
          media: "(max-width: 767px)"
        },
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href:
            "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200&display=swap",
          rel: "stylesheet"
        }
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "UOWN",
            url: this.$store.state.canonicalURL,
            logo:
              "https://res.cloudinary.com/uown-sd/image/upload/v1611222904/logo_n1ldrb.webp",
            sameAs: [
              "https://web.facebook.com/uownco?_rdc=1&_rdr",
              "https://www.instagram.com/uownco",
              "https://www.linkedin.com/company/uown.co",
              "https://twitter.com/uownco"
            ],
            address:
              "UOWN, 3rd Floor, Northgate, 118 North Street, Leeds, LS2 7PN"
          }
        }
      ]
    };
  },

  data() {
    return {
      mobileWidthLocal: false
    };
  },

  methods: {
    next() {
      this.$store.commit("next");
    },
    prev() {
      this.$store.commit("prev");
    },
    prevSlide() {
      if (this.$store.state.currentSection == 1)
        this.$store.commit("prevSlide", { carouselNumber: 1 });
    },
    nextSlide() {
      if (this.$store.state.currentSection == 1)
        this.$store.commit("nextSlide", { carouselNumber: 1 });
    },
    goToSection(index) {
      this.$store.commit("goToSection", index);
    },

    setMobileWidthBoolean(mobileWidthBoolean) {
      this.$store.commit("setMobileWidthBoolean", mobileWidthBoolean);
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

    let homepageWrapper = document.querySelector("#wrapper");
    let hammertime = new Hammer(homepageWrapper);
    hammertime.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

    hammertime.on("swipeup", ev => this.next());
    hammertime.on("swiperight", ev => this.nextSlide());
    hammertime.on("swipedown", ev => this.prev());
    hammertime.on("swipeleft", ev => this.prevSlide());
  },

  created() {
    this.setMobileWidthBooleanMixin();
  },

  mixins: [mouseScroll, setMobileWidthBooleanMixin, fullCanonicalURL]
};
</script>

<style lang="scss" scoped>
html,
body {
  overflow-y: hidden;
}

#wrapper-main {
  top: 3.5rem;
  height: calc(100vh - 3.5rem);
  overflow: scroll;
  scroll-snap-align: none;
}

#wrapper {
  transition: transform 500ms ease-in-out;
}

.section {
  height: 100%;
  min-height: unset;
}
</style>
