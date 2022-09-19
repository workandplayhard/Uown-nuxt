<template>
  <div class="scroll-icon border border-white rounded-full relative"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.scroll-icon {
  width: 40px;
  height: 70px;
}

.scroll-icon::before {
  content: "";
  width: 8px;
  height: 8px;
  background-color: white;
  display: block;
  border-radius: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 10px);
  animation: slide ease-out 2000ms infinite;
}

@keyframes slide {
  60%,
  100% {
    transform: translate(-50%, 50px);
    opacity: 0;
  }
}
</style>