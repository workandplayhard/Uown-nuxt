<template>
  <transition
    name="fade">
    <div class="main fixed py-3 px-5 bg-white flex items-center rounded z-1">
      <nuxt-link to="/">
        <img src="@/assets/images/logo-mobile.svg" alt width="40" height="21" class="w-12" />
      </nuxt-link>
      <p class="p opacity-60 ml-4 mb-0">
        <span>Fancy a cookie?</span>
        <AppLink
          link="/cookie-policy"
          text="We use cookies"
          newTab
          underline
          class="opacity-100"
        />
        <span>to improve your browsing experience.</span>
      </p>
      <button
        @click="hideCookieAlert"
        class="btn border-b transition-colors duration-300 focus:outline-none ml-4 sm:ml-10"
      >
        Accept
      </button>
    </div>
  </transition>
</template>

<script>
import AppLink from "@/components/AppLink";

export default {
  components: {
    AppLink,
  },

  methods: {
    hideCookieAlert() {
      this.$store.commit("persist/hideCookieAlert");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.main {
  bottom: 1.5rem;
  left: 1.5rem;
  max-width: calc(100% - 3rem);
  box-shadow: 0 0 6px 0 rgba(12, 20, 31, 0.15);
}

.p {
  max-width: 11rem;
}

.btn {
  color: $aquamarine;
  border-color: $aquamarine;

  &:hover {
    color: darken($aquamarine, 30%);
    border-color: darken($aquamarine, 30%);
  }
}
</style>