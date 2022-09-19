<template>
<!-- padding of .main should be just py-32 with the search bar -->
  <div class="main bg-cover bg-center mt-from-header py-32 xl:pt-32 xl:pb-48 text-center">
    <div class="container">
      <h1 class="heading text-darkgray text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{{title}}</h1>
      <p class="p text-2xl mb-10">{{para}}</p>
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

<style lang='scss' scoped>
.main {
  background-image: url(~@/assets/images/tag-bg.jpg?webp);
}

.no-webp .main {
  background-image: url(~@/assets/images/tag-bg.jpg);
}

.p {
  color: #8d8d8d;
}
</style>