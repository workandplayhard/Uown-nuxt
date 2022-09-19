<template>
  <div
    class="input-underlined flex items-center relative pb-1"
    :class="{ active }"
    @click="inputClicked"
  >
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      readonly
      required
      class="outline-none bg-transparent cursor-pointer h-full w-full"
    />
    <img
      src="@/assets/images/down-arrow.svg"
      alt=""
      class="w-3 h-3 -ml-6 transform transition-transform duration-300 opacity-60"
      :class="{ 'rotate-180': active }"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },

  methods: {
    inputClicked() {
      this.$emit("input-clicked");
    },
  },
};
</script>

<style>
</style>