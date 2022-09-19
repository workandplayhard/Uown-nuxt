<template>
<a :href="link" target="_black">
  <AppImage
    :sourceWebp="imgWebp"
    :source="img"
    class="icon"
  />
</a>
</template>

<script>
import AppImage from "@/components/AppImage";

export default {
  components: {
    AppImage
  },

  props: {
    imgWebp: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  }
};
</script>

<style scoped>
.icon {
  width: 1.8rem;
}
</style>