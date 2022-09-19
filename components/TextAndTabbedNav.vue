<template>
  <div class="md:grid container">
    <div class="md:mr-10 mb-8 md:mb-0">
      <h1 class="text-4xl md:text-5xl font-family-bold">Our Values.</h1>
      <!-- <p
        class="text-xl text-gray-700"
      >Proin dictum finibus sapien, in rhoncus enim. Vestibulum malesuada quam tristique elit egestas, ac lacinia ligula gravida. Donec convallis id purus sit amet vestibulum.</p> -->
    </div>
    <TabbedNav class="md:mr-px" />
  </div>
</template>

<script>
import TabbedNav from "../components/TabbedNav";

export default {
  components: {
    TabbedNav
  }
};
</script>

<style scoped>
.container {
  grid-template-columns: 1fr 2fr;
}
</style>