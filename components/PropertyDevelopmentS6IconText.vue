<template>
  <div class="flex items-center" :class="{ 'flex-row-reverse': reverse }">
    <div class="icon bg-white rounded-full p-4 sm:p-10" :class="{ 'mr-6': !reverse, 'ml-6': reverse }">
      <img :src="src" alt />
    </div>
    <span v-interpolation v-html="text" class="opacity-75"></span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped>
@import '@/assets/css/_variables';

.icon {
  box-shadow: 0 0 25px 3px rgba(0, 0, 0, 0.1);
  max-width: 5.5rem;
}

@media (min-width: $sm) {
  .icon {
    max-width: 9rem;
  }
}
</style>