<template>
  <div class="flex items-center">
    <img src="@/assets/images/tick_green.svg" alt class="w-8 mr-4" />
    <span class="text-lg opacity-60">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>