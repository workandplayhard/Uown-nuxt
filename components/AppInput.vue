<template>
  <div class="flex flex-col w-full">
    <appLabel :id="id" :name='name' :required='required' />
    <textarea
      v-if="textarea"
      cols="20"
      rows="5"
      :placeholder="placeholder"
      :class="$store.state.selectInputClasses"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :required='required'
      :name="name"
    ></textarea>
    <input
      v-else
      :type="type"
      :placeholder="placeholder"
      :class="$store.state.selectInputClasses"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :required='required'
      :name="name"
    />
  </div>
</template>

<script>
import appLabel from '@/components/AppLabel'

export default {
  components: {
    appLabel
  },

  props: {
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    textarea: {
      type: Boolean
    },
    value: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: true
    }
  },
};
</script>

<style>
</style>