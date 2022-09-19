<template>
  <div class="flex items-center transition-opacity duration-500">
    <span
      class="dot rounded-full mr-4"
      :class="{ 'h-6 w-6': !ver2, 'h-3 w-3': ver2 }"
      :style="{ backgroundColor: bg }"
    ></span>
    <span
      class="text"
      :class="{ 'ver-2 opacity-60 transition-opacity duration-200': ver2 }"
    >{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    ver2: {
      type: Boolean
    }
  }
};
</script>

<style lang='scss' scoped>
.ver-2 {
  font-size: 1.063rem;
}
</style>