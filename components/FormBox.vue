<template>
  <div class="relative">
    <input
      type="radio"
      :id="value"
      name="form-box"
      :value="value"
      v-model="checked1"
      required
      class="radio absolute-center cursor-pointer opacity-0"
    />
    <label
      :for="value"
      class="box sm:h-24 p-4 rounded transition-colors duration-200 w-full flex items-center justify-center cursor-pointer text-gray-700"
      >{{ value }}</label
    >
  </div>
</template>

<script>
import radio from '@/mixins/radio'

export default {
  mixins: [radio]
};
</script>

<style lang='scss' scoped>
@import '@/assets/css/_variables';

.box {
  box-shadow: 0 0 22px 0 rgba(129, 126, 112, 0.1),
    0 1px 3px 0 rgba(44, 49, 70, 0.14);
}

.radio {
  &:checked + .box {
    background-color: $aquamarine;
  }

  &:not(:checked):hover + .box {
    background-color: #f4f4f4;
  }
}
</style>