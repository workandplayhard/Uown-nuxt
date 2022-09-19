<template>
  <button
    class="btn inline-block bold rounded-full transition-colors duration-200 focus:outline-none bg-black text-white flex items-center justify-center h-12 w-24"
    :class="{ 'disabled cursor-not-allowed': disabled }"
    :disabled="disabled"
  >
    <transition name="scale">
      <img
        v-if="success !== -1"
        :key="success"
        :src="checkOrCross"
        alt
        class="absolute"
        :class="{ 'w-6': success !== 0, 'w-5': success === 0 }"
      />
    </transition>
    <transition name="scale">
      <span v-if="success == -1" class="absolute">{{ text }}</span>
    </transition>
  </button>
</template>

<script>
export default {
  props: {
    success: {
      type: Number,
    },
    text: {
      type: String,
      default: "Submit",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    checkOrCross() {
      switch (this.success) {
        case 0:
          return require("@/assets/images/times-solid.svg");
        case 1:
          return require("@/assets/images/check-1.svg");
        case 2:
          return require("@/assets/images/three-dots.svg");
        default:
          break;
      }
    },
  },

  watch: {
    success(newVal) {
      if (newVal === 0 || newVal === 1) {
        setTimeout(() => {
          this.$emit("reset-state", -1);
        }, 1500);
      }
    },
  },
};
</script>

<style scoped>
.btn {
  transition: filter 200ms;
}
.disabled {
  filter: contrast(0.4);
}
</style>