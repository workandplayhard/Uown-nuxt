<template>
  <div class="flex items-center">
     <img :src="icon" alt="" class="w-36 mr-4">
     <span class="opacity-60">{{ text }}</span>
  </div>
</template>

<script>
export default {
   props: {
      icon: {
         type: String,
         required: true
      },
      text: {
         type: String,
         required: true
      }
   }
}
</script>

<style>

</style>