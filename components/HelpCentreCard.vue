<template>
  <nuxt-link :to='link' class="bg-white px-4 py-10 flex flex-col items-center shadow-md transition duration-300 transform hover:scale-95 hover:bg-light">
    <h1 class="text-2xl text-center leading-snug">{{title}}</h1>
    <img :src="icon" alt class="img mt-4 mb-8" />
    <btnRounded text="Browse Articles" class="text-center" hollow notLink />
  </nuxt-link>
</template>

<script>
const btnRounded = () => import( "@/components/BtnRounded");

export default {
  components: {
    btnRounded
  },

  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    }
  }
};
</script>

<style scoped>
.img {
  width: 45%;
}
</style>