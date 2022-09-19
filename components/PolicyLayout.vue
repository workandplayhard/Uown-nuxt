<template>
  <div class='main py-16 mt-16 relative overflow-hidden z-1'>
    <img src='@/assets/images/rounded-box-aquamarine.svg' alt class='u-shape absolute top-0 -z-1' />
    <img src='@/assets/images/ellipse-aquamarine.svg' alt class='ellipse absolute top-0 -z-1' />
    <div class='container max-w-4xl'>
      <h1 class='text-5xl sm:text-6xl opacity-60 text-center leading-tight'>{{heading}}</h1>
      <p
        class='text-2xl text-center opacity-50 max-w-lg mx-auto mt-4 mb-16'
      >{{subheading}}</p>
      <div
        class='grid grid-cols-2 gap-4 justify-center justify-items-center sm:block text-center text-sm sm:space-x-8 mb-16'
      >
        <AppLink text='Terms & Conditions' link='/terms-and-conditions' />
        <AppLink text='Privacy Policy' link='/privacy-policy' />
        <AppLink text='Cookies Policy' link='/cookie-policy' />
        <AppLink text='MangoPay T&Cs' link='https://www.mangopay.com/terms/end-user-terms-and-conditions/Mangopay_Terms-EN.pdf' newTab />
        <AppLink text='Risk Statement' link='/risk-statement' />
      </div>
      <Breadcrumbs :breadcrumbs="breadcrumbs" class="mb-4" />
      <div class='content bg-white p-10 z-1 space-y-4'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from "@/components/AppLink";
import breadcrumbList from "@/mixins/breadcrumbList"

export default {
  components: {
    AppLink,
    Breadcrumbs: () => import('@/components/Breadcrumbs')
  },

  props: {
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      breadcrumbs: [ { text: this.heading, link: this.$route.path } ]
    }
  },

  mixins: [breadcrumbList],

  jsonld() {
    return this.breadcrumbList;
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.main {
  background-color: #fafaf8;
}

.u-shape {
  width: 70%;
  min-width: 30rem;
  right: -58%;
  top: 30rem;
  transform: rotate(36deg);
}

.ellipse {
  width: 37%;
  min-width: 18rem;
  top: 46rem;
  left: 3%;
}

@media (min-width: $sm) {
  .u-shape {
    right: -36%;
  }
}

@media (min-width: $lg) {
  .u-shape {
    top: 15rem
  }
}
</style>