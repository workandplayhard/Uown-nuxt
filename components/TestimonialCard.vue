<template>
  <div
    class="bg-white p-5 shadow h-full flex flex-col testimonial-card rounded relative"
  >
    <span class="heading text-left">{{ belowName }}</span>
    <div class="mt-2 quote">{{ quote }}</div>
    <div class="five-stars flex">
      <img src="@/assets/images/empty-star.png" />
      <img src="@/assets/images/empty-star.png" />
      <img src="@/assets/images/empty-star.png" />
      <img src="@/assets/images/empty-star.png" />
      <img src="@/assets/images/empty-star.png" />
    </div>
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

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.testimonial-card {
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  height: 394px;
  border-radius: 17px;
}

.five-stars {
  position: absolute;
  bottom: 2rem;

  img {
    width: 30px !important;
    margin-left: 0.2rem;
  }
}

.heading {
  font-family: "Plus Jakarta";
  font-style: Bold;
  font-size: 24px;
  line-height: 32px;
  color: black;
}

.quote {
  font-family: "Plus Jakarta";
  font-style: Regular;
  font-size: 20px;
  line-height: 28px;
  color: #373734;
}
</style>
