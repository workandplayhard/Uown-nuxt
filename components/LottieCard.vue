<template>
  <div
    class="bg-white shadow-md rounded-md flex flex-col items-center text-center p-4"
    @mouseenter="play"
    @mouseleave="stop"
  >
    <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
    <p class="text-xl md:text-2xl" v-html="text"></p>
  </div>
</template>

<script>
export default {
  components: {
    Lottie: () => import("vue-lottie/src/lottie.vue")
  },
  data() {
    return {
      defaultOptions: {
        animationData: this.animationData,
        autoplay: false,
        loop: false
      }
    };
  },
  props: {
    animationData: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    play() {
      this.anim.setDirection(1);
      this.anim.play();
      this.anim.loop = true;
    },
    stop() {
      this.anim.setDirection(-1);
      this.anim.loop = false;
    }
  }
};
</script>

<style lang='scss' scoped>
</style>