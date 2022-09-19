<template>
  <label :for="id" :required='required' class="label font-family-bold mb-1" :class='{ required }'>{{name}}</label>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean
    }
  }
};
</script>

<style scoped>
.label {
  color: #666;
}
</style>