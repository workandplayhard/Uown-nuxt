<template>
  <div
    class="flex py-12 flex-col items-center lg:justify-start md:justify-center justify-start relative hub-journey mx-8 md:mx-0 bg-contain"
  >
    <div class="lg:text-5xl w-447 text-center font-bold md:text-4xl text-3xl">
      Start your UOWN investment journey
    </div>
    <div
      class="lg:grid px-16 lg:grid-cols-2 grid flex-row-reverse lg:mt-0 mt-12"
    >
      <img
        src="@/assets/images/HUB_JOURNEY_IMAGE.png"
        class="hidden order-last lg:order-first lg:block"
      />
      <div class="my-auto z-1">
        <form
          name="product-not-available"
          class="flex journey-form flex-col w-60 items-center md:w-96"
        >
          <input
            type="email"
            name="Email"
            placeholder="Enter email"
            class="input flex-grow py-2 px-8 focus:outline-none w-full border border-black lg:h-16 color-black rounded-1000 h-11 hidden md:block"
            required
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            class="input flex-grow py-2 px-8 focus:outline-none w-full border border-black lg:h-16 color-black rounded-1000 h-11 mt-4 hidden md:block"
            required
          />
          <div class="items-center justify-center pt-5 hidden md:flex">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-4 lg:text-base text-sm font-medium text-black"
            >
              Keep me up to date with everything UOWN
            </label>
          </div>
          <button
            type="button"
            class="absolute invest-button md:relative text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-1000 lg:text-xl text-lg lg:mt-12 mt-10 lg:h-16 w-40 lg:w-full h-10"
          >
            Get Investing
          </button>
        </form>
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
<style>
.w-447 {
  width: 447px;
}

.h-60 {
  height: 60px;
}

.hub-journey {
  border-radius: 20px;
  background-image: url("~@/assets/images/HUB_JOURNEY_SM_BACKGROUND.png");
  min-height: 349px;
  background-repeat: no-repeat;
  background-position: center;
}

.invest-button {
  bottom: 24px;
  height: 54px;
  width: 219px;
}

@media (min-width: 1024px) {
  .hub-journey {
    background: linear-gradient(180deg, #ffffff 0%, #d0d0d0 100%);
  }
  .journey-form {
    width: 526px;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .hub-journey {
    background: linear-gradient(180deg, #ffffff 0%, #d0d0d0 100%);
  }

  .journey-form {
    width: 473px;
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
</style>
