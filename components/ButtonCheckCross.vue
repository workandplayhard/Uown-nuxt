<template>
  <div class="relative">
    <label
      :for="value"
      class="btn p-6 border-2 cursor-pointer transition duration-100 text-lg flex items-center relative"
      :class="{
        'border-aquamarine text-gray-700': value == checked,
        'hover:border-gray-400 text-gray-600': value != checked,
      }"
    >
      <transition name="fade">
        <img
          :key="src"
          :src="src"
          alt
          class="icon absolute w-5 h-5 left-0 top-1/2 transform translate-x-3 -translate-y-1/2"
        >
      </transition>
      <span class="ml-5">{{ value }}</span>
    </label>
    <input
      type="radio"
      :id="value"
      name="btn-check-cross"
      :value="value"
      v-model="checked1"
      required
      class="absolute-center cursor-pointer opacity-0"
    />
  </div>
</template>

<script>
import radio from '@/mixins/radio'

export default {
  computed: {
    src() {
      return this.value == this.checked
        ? require("@/assets/images/check.svg")
        : require("@/assets/images/close.svg");
    },
  },

  mixins: [radio]
};
</script>

<style lang='scss' scoped>
.btn {
  line-height: 0;
  background-color: #f8f8f8;

  &:active {
    transform: scale(1.01);
  }
}
</style>