<template>
  <div class="w-full bg-gray-100 py-10">
    <div class="container bg-white px-0 rounded-2xl py-16">
      <div class="progress">
        <div class="grid-cols-2 gap-4 hidden lg:grid relative">
          <div class="ml-12">
            <ol class="relative border-l border-gray-200 my-5">
              <li
                :class="
                  `mb-24 ml-32 flex items-center ${
                    activeIndex === 0 ? 'active' : ''
                  }`
                "
                @click="changeActive(0)"
              >
                <div class="item-icon absolute bg-white">
                  <div
                    class="item-image-container rounded-21 flex justify-center items-center"
                  >
                    <span class="flex justify-center items-center item-image">
                      <img :src="train" width="100%" height="100%" />
                    </span>
                  </div>
                </div>
                <div class="item-content">
                  <h3
                    class="flex items-center mb-1 text-2xl dark:text-white item-title"
                  >
                    Register your account
                  </h3>
                  <div class="item-text text-lg hidden">
                    UOWN allows you to have complete flexibility and control
                    over your investing.
                  </div>
                </div>
              </li>
              <li
                :class="
                  `mb-24 ml-32 flex items-center ${
                    activeIndex === 1 ? 'active' : ''
                  }`
                "
                @click="changeActive(1)"
              >
                <div class="item-icon absolute bg-white">
                  <div
                    class="item-image-container rounded-21 flex justify-center items-center"
                  >
                    <span class="flex justify-center items-center item-image">
                      <img :src="camera" width="100%" height="100%" />
                    </span>
                  </div>
                </div>
                <div class="item-content">
                  <h3
                    class="flex items-center mb-1 text-2xl dark:text-white item-title"
                  >
                    Invest in Properties
                  </h3>
                  <div class="item-text text-lg hidden">
                    UOWN allows you to have complete flexibility and control
                    over your investing.
                  </div>
                </div>
              </li>
              <li
                :class="
                  `mb-24 ml-32 flex items-center ${
                    activeIndex === 2 ? 'active' : ''
                  }`
                "
                @click="changeActive(2)"
              >
                <div class="item-icon absolute bg-white">
                  <div
                    class="item-image-container rounded-21 flex justify-center items-center"
                  >
                    <span class="flex justify-center items-center item-image">
                      <img :src="message" width="100%" height="100%" />
                    </span>
                  </div>
                </div>
                <div class="item-content">
                  <h3
                    class="flex items-center mb-1 text-2xl dark:text-white item-title"
                  >
                    Kick Back & Relax
                  </h3>
                  <div class="item-text text-lg hidden">
                    UOWN allows you to have complete flexibility and control
                    over your investing.
                  </div>
                </div>
              </li>
              <li
                :class="
                  `ml-32 flex items-center ${activeIndex === 3 ? 'active' : ''}`
                "
                @click="changeActive(3)"
              >
                <div class="item-icon absolute bg-white">
                  <div
                    class="item-image-container rounded-21 flex justify-center items-center"
                  >
                    <span class="flex justify-center items-center item-image">
                      <img :src="train" width="100%" height="100%" />
                    </span>
                  </div>
                </div>
                <div class="item-content">
                  <h3
                    class="flex items-center mb-1 text-2xl dark:text-white item-title"
                  >
                    Reap your rewards
                  </h3>
                  <div class="item-text text-lg hidden">
                    UOWN allows you to have complete flexibility and control
                    over your investing.
                  </div>
                </div>
              </li>
            </ol>
          </div>
          <div></div>
        </div>
        <div class="lg:hidden progress-container">
          <div class="flex justify-between border-t">
            <div
              :class="`${activeIndex === 0 ? 'active' : ''}`"
              @click="changeActive(0)"
            >
              <div class="item-icon bg-white">
                <div
                  class="item-image-container rounded-21 flex justify-center items-center"
                >
                  <span class="flex justify-center items-center item-image">
                    <img :src="train" width="100%" height="100%" />
                  </span>
                </div>
              </div>
            </div>
            <div
              :class="`${activeIndex === 1 ? 'active' : ''}`"
              @click="changeActive(1)"
            >
              <div class="item-icon bg-white">
                <div
                  class="item-image-container rounded-21 flex justify-center items-center"
                >
                  <span class="flex justify-center items-center item-image">
                    <img :src="camera" width="100%" height="100%" />
                  </span>
                </div>
              </div>
            </div>
            <div
              :class="`${activeIndex === 2 ? 'active' : ''}`"
              @click="changeActive(2)"
            >
              <div class="item-icon bg-white">
                <div
                  class="item-image-container rounded-21 flex justify-center items-center"
                >
                  <span class="flex justify-center items-center item-image">
                    <img :src="message" width="100%" height="100%" />
                  </span>
                </div>
              </div>
            </div>
            <div
              :class="`${activeIndex === 3 ? 'active' : ''}`"
              @click="changeActive(3)"
            >
              <div class="item-icon bg-white">
                <div
                  class="item-image-container rounded-21 flex justify-center items-center"
                >
                  <span class="flex justify-center items-center item-image">
                    <img :src="train" width="100%" height="100%" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 text-center text-black text-container flex mx-auto">
            <div v-if="activeIndex === 0">
              <h3 class="text-xl font-bold">
                Register your account
              </h3>
              <div class="text-base mt-4">
                UOWN allows you to have complete flexibility and control over
                your word word investing.
              </div>
            </div>
            <div v-if="activeIndex === 1">
              <h3 class="text-xl font-bold">
                Invest in Properties
              </h3>
              <div class="text-base mt-4">
                UOWN allows you to have complete flexibility and control over
                your word word investing.
              </div>
            </div>
            <div v-if="activeIndex === 2">
              <h3 class="text-xl font-bold">
                Kick Back & Relax
              </h3>
              <div class="text-base mt-4">
                UOWN allows you to have complete flexibility and control over
                your word word investing.
              </div>
            </div>
            <div v-if="activeIndex === 3">
              <h3 class="text-xl font-bold">
                Reap your rewards
              </h3>
              <div class="text-base mt-4">
                UOWN allows you to have complete flexibility and control over
                your word word investing.
              </div>
            </div>
          </div>
          <div class="item-image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import train from "../assets/images/HOME_train.svg";
import message from "../assets/images/HOME_message.svg";
import camera from "../assets/images/HOME_camera.svg";

export default {
  methods: {
    changeActive(index) {
      this.activeIndex = index;
    }
  },
  data() {
    return {
      train,
      camera,
      message,
      activeIndex: 0
    };
  }
};
</script>

<style>
.rounded-2xl {
  border-radius: 1rem;
}

@media (min-width: 1024px) {
  .progress {
    border-left: solid 81px red;
  }
}

@media (max-width: 1023px) {
  .progress {
    border-top: solid 81px red;
  }
}

.bg-red {
  background-color: red;
}

.item-icon {
  cursor: pointer;
}

@media (min-width: 1024px) {
  .item-icon {
    padding-top: 15px;
    padding-bottom: 15px;
    left: -33.5px;
  }

  .item-image-container {
    padding: 17px;
    background-color: #d9d9d9;
  }

  .item-image {
    width: 33px;
    height: 33px;
  }

  .active > .item-icon > .item-image-container {
    padding: 24px;
    background-color: black;
  }

  .active > .item-icon > .item-image-container > .item-image {
    width: 46px;
    height: 46px;
  }

  .active > .item-icon {
    left: -41px;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .item-icon {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: -28.5px;
  }

  .progress-container {
    padding: 40px 57px;
  }

  .item-image-container {
    padding: 14px;
    background-color: #d9d9d9;
  }

  .item-image {
    width: 25px;
    height: 25px;
  }

  .active > .item-icon > .item-image-container {
    padding: 18px;
    background-color: black;
  }

  .active > .item-icon > .item-image-container > .item-image {
    width: 36px;
    height: 36px;
  }

  .active > .item-icon {
    margin-top: -36px;
  }
}

@media (max-width: 767px) {
  .item-icon {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: -20px;
  }

  .progress-container {
    padding: 30px 39px;
  }

  .item-image-container {
    padding: 10px;
    background-color: #d9d9d9;
  }

  .item-image {
    width: 20px;
    height: 20px;
  }

  .active > .item-icon > .item-image-container {
    padding: 13px;
    background-color: black;
  }

  .active > .item-icon > .item-image-container > .item-image {
    width: 23px;
    height: 23px;
  }

  .active > .item-icon {
    margin-top: -24.5px;
  }
}

.item-content {
  color: #d0d0d0;
}

.rounded-21 {
  border-radius: 21px;
}

.active > .item-content {
  color: black;
}

.active > .item-content > .item-title {
  font-weight: 700;
}

.active > .item-content > .item-text {
  display: block;
}

.text-container {
  max-width: 372px;
}
</style>
