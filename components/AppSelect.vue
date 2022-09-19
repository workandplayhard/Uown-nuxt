<template>
  <div class="flex flex-col w-full">
    <appLabel :required="required" :id="id" :name="name" />
    <select
      :id="id"
      class="bg-white"
      :class="$store.state.selectInputClasses"
      :value="value"
      :name="name"
      :required="required"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="(e, i) in options"
        :key="i"
        :disabled="i == 0"
        :selected="i == 0"
        :value="i == 0 ? '' : e"
      >
        {{ e }}
      </option>
    </select>
  </div>
</template>

<script>
import appLabel from "@/components/AppLabel";

export default {
  components: {
    appLabel,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>