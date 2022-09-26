<template>
  <a class="hub-card" :href="'https://www.uown.co' + link">
    <img
      src="../assets/images/HUB_CARD_IMAGE.png"
      class="card-image"
      :style="{ 'border-bottom': `5px solid ${color}` }"
    />
    <div class="p-6">
      <div class="text-xl font-bold">
        {{ title }}
      </div>
      {{ linkText }}
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
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
    linkText: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.hub-card {
  background-color: white;
  box-shadow: 0px 8px 9px 18px rgba(29, 29, 27, 0.03);
  border-radius: 20px;
  overflow: hidden;
  height: 312px;

  &:hover {
    box-shadow: 2 2 6px 2 rgba(92, 160, 255, 0.15);
    opacity: 0.5;
  }
}

.card-image {
  height: 206px;
}
</style>
