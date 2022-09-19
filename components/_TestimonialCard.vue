<template>
  <div
    class="bg-white p-5 shadow h-full flex flex-col justify-between testimonial-card rounded relative"
  >
    <span class="quote-icon text-center absolute top-0 left-1/2 transform -translate-x-1/2">“</span>
    <div class="mt-16 md:mt-18 lg:mt-24">{{quote}}</div>
    <span class="name text-center text-xl">{{belowName}}</span>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    img: String,
    quote: String,
    belowName: String
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.testimonial-card {
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
}

.quote-icon {
  font-size: 11.375rem;
  color: #71e5bd;
  line-height: 1;
}

.name {
  color: #71e5bd;
}

@media (min-width: $lg) {
  .quote-icon {
    font-size: 14.375rem;
  }
}
</style>