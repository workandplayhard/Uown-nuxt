<template></template>

<script>
export default {
  // causes 404 on localhost but works when deployed
  beforeRouteEnter(to, from, next) {
    next(`/category/${to.params.category}/1`);
  },
};
</script>

<style>
</style>