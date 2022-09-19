<template>
  <div class="flex flex-col items-center space-y-2 text-center">
    <img v-if="icon" :src="icon" alt class="w-32" />
    <NLink :to='link' class="font-family-bold text-2xl" :class='classes'>{{title}}</NLink>
    <p class="text-xl">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String
    },
    link: {
      type: String,
      default: ''
    }
  },

  computed: {
    classes() {
      if(this.link != '')
      return 'opacity-75 link-underlined'
      else return 'cursor-text pointer-events-none'
    }
  }
};
</script>

<style scoped>

</style>