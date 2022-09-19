<template>
  <div class="crumb-wrapper">
    <nuxt-link
      :to="link"
      class="
        crumb
        relative
        rounded-full
        border
        px-3
        flex
        mt-3
        transition-colors
        duration-200
      "
      :class="getClasses"
      :ver2="ver2"
      :style="getColor"
    >
      <span :id="idProp">{{ text }}</span>
      <img
        src="@/assets/images/cross-2.svg"
        alt
        class="cross w-2 ml-1"
        v-if="hasX && lastChild"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
    ver2: {
      type: Boolean,
    },
    color: {
      type: String,
    },
    lastChild: {
      type: Boolean,
    },
    hasX: {
      type: Boolean,
    },
    idProp: {
      type: String,
    },
  },

  computed: {
    getClasses() {
      return {
        "border-black hover:bg-black hover:text-white": !this.ver2,
        "ver-2 border-gray-400 hover:border-black opacity-75 hover:opacity-100":
          this.ver2,
      };
    },
    getColor() {
      if (this.ver2 && this.lastChild)
        return { backgroundColor: this.color, borderColor: this.color };
    },
  },

  watch: {
    lastChild: {
      immediate: true,
      handler(newVal) {
        if (newVal) this.$store.commit("setPageTitle", this.text);
      },
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.crumb-wrapper {
  .crumb {
    padding-bottom: 0.1rem;
  }

  &:not(:last-child) {
    margin-right: 1rem;

    .crumb {
      padding-right: 0.35rem;

      &::after {
        content: "\003E";
        color: black;
        transform: translateX(1.1rem);
      }
    }
  }

  &:last-child {
    .crumb {
      color: white;

      &:not(.ver-2) {
        background-color: black;
      }

      &.ver-2 {
        border-color: $aquamarine;
        opacity: 1;
      }
    }
  }
}

.crumb {
  font-size: 0.7rem;
}

.cross {
  margin-top: 0.15rem;
}

@media (min-width: $sm) {
  .crumb-wrapper {
    &:not(:last-child) {
      margin-right: 2rem;

      .crumb {
        // padding-right: 0.35rem;

        &::after {
          transform: translateX(1.7rem);
        }
      }
    }
  }

  .crumb {
    font-size: 0.825rem;
  }
}
</style>