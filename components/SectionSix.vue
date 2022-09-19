<template>
  <div>
    <img :src="icon" alt="">
  </div>
</template>

<script>
import heading from '../components/Heading'
export default {
  components: {
    heading
  },

  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>