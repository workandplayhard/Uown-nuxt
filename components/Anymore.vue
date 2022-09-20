<template>
  <div>
    <div class="background">
      <div class="w-368 h-375 bg-white center relative">
        <span>Investing without the hassle.</span>
        <img
          src="@/assets/images/bg-help-without-center.svg"
          alt
          width="159"
          height="173"
          class="absolute"
        />
        <button
          type="button"
          class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-1000 text-xl text-lg lg:mt-12 mt-10 lg:h-16 w-40 lg:w-183 h-10"
        >
          Get Investing
        </button>
      </div>
    </div>
    <div
      class="md:bg-anymore flex py-12 flex-col items-center lg:justify-start md:justify-center justify-start relative md:block hidden"
    >
      <div
        class="lg:grid px-16 lg:grid-cols-2 grid flex-row-reverse lg:mt-0 mt-12"
      >
        <img
          src="../assets/images/bg-help-touch.png"
          class="block order-first lg:order-last lg:block hidden md:block"
        />
        <div
          class="z-10 md:w-544 bg-white p-10 rounded-30 m-auto hidden md:block"
        >
          <div class="flex items-center justify-left pt-5">
            <label
              for="default-radio-1"
              class="ml-4 text-5xl text-sm font-medium text-black font-family"
            >
              Got anymore questions?
            </label>
          </div>

          <div class="flex items-center justify-left pt-5">
            <label
              for="default-radio-1"
              class="ml-4 text-2xl text-sm font-medium text-black"
            >
              Dont hestitate to get in touch about your queries.
            </label>
          </div>
          <button
            type="button"
            class="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-1000 text-xl text-lg lg:mt-12 mt-10 lg:h-16 w-40 lg:w-183 h-10"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnRounded from "./BtnRounded.vue";
export default {
  data() {
    return {};
  },
  components: { BtnRounded }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables";

.w-183 {
  width: 183px;
}

.w-447 {
  width: 447px;
}

.w-544 {
  width: 544px;
}

.w-368 {
  width: 368px;
}

.h-375 {
  height: 375px;
}

.h-60 {
  height: 60px;
}

@media (min-width: 1024px) {
  .journey-form {
    width: 526px;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .journey-form {
    width: 473px;
  }
}

.bg-anymore {
  background: #f4f4f4;
}

.background {
  button {
    position: absolute;
    top: 20rem;
  }

  img {
    top: 6rem;
  }

  span {
    width: 299px;
    font-size: 30px;
    line-height: 36px;
    color: #1d1d1b;
    text-align: center;
    font-family: "Plus Jakarta bold";
    padding-top: 1rem;
  }

  @media (max-width: $md) {
    background: linear-gradient(0deg, #71e58d, RGB(248, 248, 248, 0));
    background-size: cover;
    background-repeat: no-repeat;
    height: 520px;

    justify-content: center;
    display: flex;
  }
  @media (min-width: $md) {
    display: none;
  }
}

.center {
  margin: auto;
  /* margin-top: auto; */
  justify-content: center;
  display: flex;
  border-radius: 20px;

  img {
    margin-left: 2rem;
  }
}

.rounded-1000 {
  border-radius: 1000px;
}

.mt-50 {
  margin-top: 50px;
}

.w-367 {
  width: 367px;
}

.journey-ball-top {
  top: 11px;
  right: 0px;
}

.font-family {
  font-family: "Plus Jakarta bold";
}

.rounded-30 {
  border-radius: 30px;
}

.journey-ball-bottom {
  bottom: 48px;
  left: -35px;
  height: 416px;
  width: 235px;
}
</style>
