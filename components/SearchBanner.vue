<template>
  <!-- padding of .main should be just py-32 with the search bar -->
  <div
    class="main bg-cover bg-center mt-from-header py-32 xl:pt-32 xl:pb-48 text-center"
  >
    <div class="container">
      <h1 class="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-20">
        {{ title }}
      </h1>
      <p class="p text-2xl mb-10">{{ para }}</p>
      <!-- <search ver2 placeholder="What are you looking for?" /> -->
    </div>
  </div>
</template>

<script>
// import search from "@/components/Search";

export default {
  // components: {
  //   search
  // },

  props: {
    title: {
      type: String,
      required: true
    },
    para: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.main {
  height: 460px;
  background-image: url(~@/assets/images/bg-help-landing.png?webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.no-webp .main {
  background-image: url(~@/assets/images/bg-help-landing.png);
}

.p {
  font-family: "Plus Jakarta";
  font-style: Medium;
  font-size: 20px;
  line-height: 28px;
  text-align: Center;
  color: #1d1d1b;
  @media (min-width: $md) {
    width: 598px;
  }
  margin: auto;
  display: flex;
}
</style>
