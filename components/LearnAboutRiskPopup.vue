<template>
  <transition
    v-if="!hidden && !$store.state.persist.dontShowAboutRisk"
    name="slideY"
  >
    <div
      class="email-banner dark fixed px-4 py-6 rounded-lg z-1 shadow-md text-white"
      :class="{ 'email-banner-overlay': success }"
      :style="position"
    >
      <h1 class="text-lg font-family-bold mb-3 mt-2 uppercase">
        Risk statement
      </h1>
      <p class="text-lg">
        Property prices go up as well as down, so you might not get out what you
        put in. The same goes for how much rent we collect.
      </p>
      <p class="text-lg">
        For more information see our full
        <nuxt-link
          to="/risk-statement"
          class="border-b border-white border-opacity-25 hover:border-opacity-100 transition-colors duration-300"
        >
          risk statement.
        </nuxt-link>
      </p>
      <checkbox
        idProp="dont-show-popup"
        v-model="checked"
        label="Don't show this warning again."
      />
      <span
        class="z-1 close absolute text-sm border-b opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200"
        @click="updateAboutRiskVisibility()"
        >Close</span
      >
      <btn
        text="Ok, got it"
        class="mt-4"
        notLink
        @click.native="updateAboutRiskVisibility()"
      />
      <alertError v-if="error" class="mt-3" />
    </div>
  </transition>
</template>

<script>
import alertError from "@/components/AlertError";
import emailBanner from "@/mixins/emailBanner";
import btn from "@/components/BtnRounded";

export default {
  components: {
    alertError,
    btn,
    checkbox: () => import("@/components/Checkbox"),
  },

  props: {
    bottom: {
      type: Number,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      checked: false,
    };
  },

  computed: {
    position() {
      let positionX = {
        left: "",
        right: "",
      };

      if (this.right) {
        positionX.left = "unset";
        positionX.right = " 1.5rem";
      } else {
        positionX.left = "1.5rem";
        positionX.right = " unset";
      }

      return {
        "--bottom": `${this.bottom}rem`,
        "--right": positionX.right,
        "--left": positionX.left,
      };
    },
  },

  methods: {
    updateAboutRiskVisibility() {
      this.checked
        ? this.$store.commit("persist/updateAboutRiskVisibility", this.checked)
        : (this.hidden = true);
    },
  },

  mixins: [emailBanner],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.email-banner {
  bottom: var(--bottom);
  left: 1.5rem;
  background-color: #5a6cc0;
  max-width: calc(100% - 3rem);

  &-overlay::before {
    @layer components {
      @apply rounded-md;
    }
  }
}

.close {
  top: 0.5rem;
  right: 0.5rem;
}

@media (min-width: $sm) {
  .email-banner {
    max-width: 26rem;
    // bottom: 1.5rem;
    left: var(--left);
    right: var(--right);
  }
}
</style>