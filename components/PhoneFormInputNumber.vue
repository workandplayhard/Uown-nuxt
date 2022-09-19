<template>
  <div class="input-underlined relative z-1" :class="{ active }">
    <input
      type="number"
      class="outline-none bg-transparent w-full h-full"
      pattern="[0-9.]+"
      @focus="active = true"
      @blur="blur"
      :value="value"
      @input="$emit('input', $event.target.value)"
      required
      ref="input"
    />
    <label
      for=""
      class="label absolute left-0 bottom-0 -z-1 leading-7"
      :class="{ 'label-active': active }"
      >Phone number</label
    >
  </div>
</template>

<script>
export default {
  props: ["value"],

  data() {
    return {
      active: false,
    };
  },

  methods: {
    blur() {
      if (!this.value) this.active = false;
    },
  },

  mounted() {
    this.$refs.input.focus()
  }
};
</script>

<style scoped>
.label {
  transition: transform 300ms;
  opacity: .45;
}

.label-active {
  transform: translate(-.55rem ,-1.4rem) scale(.85)
}
</style>