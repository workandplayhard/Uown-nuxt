<template>
  <button
    type="submit"
    class="btn py-3 px-3 sm:px-6 bg-white email-button focus:outline-none transition-opacity duration-200 text-softnavy flex items-center text-center"
    :class="{
      'rounded sm:rounded-l-none': stackedOnMobile && !roundedBtn,
      'rounded-r': !stackedOnMobile && !roundedBtn,
      'rounded-full sm:ml-4 text-lg': roundedBtn
    }"
  >
    <svg
      v-if="loading"
      class="animate-spin mr-2 h-5 w-5 text-softnavy"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    Register
  </button>
</template>

<script>
export default {
  props: {
    stackedOnMobile: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    roundedBtn: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.email-button {
  width: 136px;
  height: 45px;
  background: #f1f1f1;
  border-radius: 1000px;
  padding-left: 1rem;
  color: #767676;
  justify-content: center;
}
</style>
