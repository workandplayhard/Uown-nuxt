<template>
  <div>
    <heading :text="title" class="mb-2" />
    <bigP :text="para" />
    <BtnRounded
      v-if="btnText"
      :link="btnLink"
      :text="btnText"
      :notLink="btnNotLink"
      :outerLink='btnOuterLink'
      :scrollTo="scrollTo"
      :scrollOffset="scrollOffset"
      :underText="underText"
      class="text-xl"
    />
  </div>
</template>

<script>
const BtnRounded = () => import( "../components/BtnRounded");
import heading from "../components/Heading";
import bigP from "../components/BigP";

export default {
  name: "BannerText",

  components: {
    BtnRounded,
    heading,
    bigP
  },

  props: {
    title: {
      type: String,
      required: true
    },
    para: {
      type: String
    },
    btnText: {
      type: String
    },
    btnLink: {
      type: String
    },
    btnNotLink: {
      type: Boolean
    },
    btnOuterLink: {
      type: Boolean
    },
    scrollTo: {
      type: String
    },
    scrollOffset: {
      type: Number
    },
    underText: {
      type: String,
    }
  }
};
</script>

<style>
</style>