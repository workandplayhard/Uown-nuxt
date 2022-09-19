<template>
  <li class="flex flex-col p-4">
    <span class="uppercase text-xs opacity-50 mb-1">{{upper}}</span>
    <slot>
      <span class="lower">{{lower}}</span>
    </slot>
  </li>
</template>

<script>
export default {
  props: {
    upper: {
      type: String,
      required: true
    },
    lower: {
      type: [String, Date]
    }
  }
};
</script>

<style scoped>
.lower {
  font-size: 1.063rem;
}
</style>