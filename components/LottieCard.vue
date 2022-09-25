<template>
  <div
    class="bg-white shadow-md rounded-md flex flex-col items-center text-center p-4 hover"
  >
    <img :src="get_svg" class="mb-20" alt width="147" height="135" />
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
    },
    svg: {
      type: String,
      required: true
    }
  },
  computed: {
    get_svg() {
      return this.svg;
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

<style lang="scss" scoped>
.hover {
  border-radius: 24px;

  &:hover {
    margin: -0.8rem;
  }
}

// .hover:hover + .hover {
//   margin: 20px;
// }
</style>
