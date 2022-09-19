<template>
  <transition name="fade">
    <div
      class="about-risk text-center fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center py-6"
    >
      <div class="flex flex-col items-center max-w-md content p-4">
        <p class="font-bold text-xl mb-3">ABOUT RISK</p>
        <p
          class="content-body"
        >Property prices go up as well as down, so you might not get out what you put in. The same goes for how much rent we collect. Our forecasting tools help with the guesswork but they're not a reliable way to predict the future. Please also note that invested capital is illiquid and is not protected under the Financial Services Compensation Scheme.</p>
        <BtnRounded text="Ok, got it" class="my-8 text-xl" @click.native="hideAboutRisk" />
        <span class="close absolute cursor-pointer" @click="hideAboutRisk">Close</span>
        <checkbox
          idProp="dont-show"
          v-model="dontShowAboutRisk"
          label="Don't show this warning again."
        />
        <p class="opacity-75 text-sm mt-5">
          Before deciding to invest please read our
          <nuxt-link
            to="/risk-statement"
            class="link text-black border-b opacity-75 hover:opacity-100 hover:border-black"
            @click.native="hideAboutRisk"
          >full risk warning</nuxt-link>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AboutRisk",
  components: {
    BtnRounded: () => import( "../components/BtnRounded"),
    Checkbox: () => import("@/components/Checkbox"),
  },
  methods: {
    hideAboutRisk() {
      this.$store.commit("hideAboutRisk");
    }
  },
  computed: {
    dontShowAboutRisk: {
      get() {
        return this.$store.state.persist.dontShowAboutRisk;
      },
      set(value) {
        this.$store.commit("persist/updateAboutRiskVisibility", value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.about-risk {
  background-color: $yellow;
  z-index: 12;

  &::before {
    content: "";
    position: absolute;
    height: 70vh;
    width: 70vh;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    left: 0;
    bottom: 0;
    transform: translate(-40%, 50%);
  }
}

.close {
  top: 1rem;
  right: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.content {
  z-index: 1;
}

.content-body {
  font-size: 1.1rem;
}

.link:not(:hover) {
  border-color: rgba(0, 0, 0, 0.3);
}

@media (min-width: $sm) {
  .about-risk::before {
    transform: translate(-40%, 50%);
    height: 120vh;
    width: 120vh;
  }
}
</style>