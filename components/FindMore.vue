<template>
  <div class="bg-light min-h-screen flex items-center">
    <div class="container text-center">
      <vue-typed-js
        :strings="[
      'property investing made simple.',
      'property investing made easy.',
      'property investing made accessible.',
      '15% average returns.',
      'rated 4.7/5 on TrustPilot.',
      'trusted by thousands of customers.'
      ]"
      	:backSpeed="13"
        :loop="true"
       class="text-5xl justify-center">
        <h1>
          UOWN is
          <span class="typing"></span>
        </h1>
      </vue-typed-js>
      <BtnRounded text="Find out more" class="mt-2 text-xl" />
    </div>
  </div>
</template>

<script>
const BtnRounded = () => import( "../components/BtnRounded");

export default {
  name: "FindMore",
  components: {
    BtnRounded
  }
};
</script>

<style lang='scss' scoped>
</style>