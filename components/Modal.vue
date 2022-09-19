<template>
  <portal to="modal">
    <transition name="fade">
      <section class="bg-white fixed flex inset-0 justify-center modal">
        <div
          class="popup-bg-circle sell bubble-1-rotate"
          :style="circleBg"
        ></div>
        <div
          class="popup-bg-circle sell bubble-2-rotate sell-2"
          :style="circleBg"
        ></div>
        <div
          class="popup-bg-circle sell bubble-3-rotate sell-3"
          :style="circleBg"
        ></div>
        <div
          class="text-wrapper flex-col grid max-w-md sm:w-full text-center w-11/12"
        >
          <div class="flex flex-col justify-center items-center">
            <div
              class="rounded-full mb-6"
              :class="{
                'bg-trapsparent': status === 'error' || status === 'warning',
                'bg-white': status !== 'error' && status !== 'warning',
              }"
            >
              <img
                :src="icon"
                alt=""
                class="w-32 h-32"
                :class="{
                  'opacity-50': status === 'error' || status === 'warning',
                }"
              />
            </div>
            <h1 class="text-3xl font-family-bold mb-1">
              {{ title }}
            </h1>
            <p v-if="para" class="p opacity-50">
              {{ para }}
            </p>
          </div>
          <slot>
            <btn
              text="OK"
              notLink
              class="btn w-full text-lg transform -translate-y-12"
              @click.native="$emit('close')"
            />
          </slot>
        </div>
      </section>
    </transition>
  </portal>
</template>

<script>
export default {
  components: {
    btn: () => import("@/components/BtnRounded"),
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    para: {
      type: String,
    },
    status: {
      type: String,
      validator: (value) => ["warning", "error"].indexOf(value) !== -1,
    },
  },

  computed: {
    icon() {
      return this.status !== "warning" && this.status !== "error"
        ? require("@/assets/images/success.svg")
        : require("@/assets/images/cross-1.svg");
    },

    circleBg() {
      let bg = "";
      switch (this.status) {
        case "warning":
          bg = "#F7d95c";
          break;
        case "error":
          bg = "#fc4c4c";
          break;
        default:
          bg = "#6adaa9";
          break;
      }
      return {
        "--circle-bg": bg,
      };
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.modal {
  z-index: 2;
}

.text-wrapper {
  grid-template-rows: 1fr auto;
}

.p {
  font-size: 1.1rem;
}

.btn ::v-deep button {
  width: 100%;
}

.popup-bg-circle {
  position: absolute;
  left: -300px;
  bottom: -540px;
  width: 900px;
  height: 900px;
  border-radius: 100%;
  opacity: 0.8;
  background-color: var(--circle-bg);
  z-index: -1;
  transition: background-color 500ms;

  &.sell.sell-2 {
    top: -100px;
    right: 40px;
    width: 300px;
    height: 300px;
    left: auto;
    bottom: auto;
    opacity: 0.24;
  }

  &.sell-3 {
    left: 200px;
    top: 160px;
    bottom: auto;
    width: 220px;
    height: 220px;
  }
}

@media (min-width: $lg) {
  .popup-bg-circle.sell.sell-2 {
    top: -180px;
    right: 130px;
    width: 400px;
    height: 400px;
  }
}

.bubble-1-rotate {
  animation: bubble-1-rotate 40s infinite linear;
}

.bubble-2-rotate {
  animation: bubble-2-rotate 40s infinite linear;
}

.bubble-3-rotate {
  animation: bubble-3-rotate 40s infinite linear;
}

@layer components {
  .input {
    @apply text-2xl border-black;
  }
}

@keyframes bubble-1-rotate {
  0% {
    transform: translate(-74px, 5px);
  }
  33% {
    transform: translate(74px, -40px);
  }
  66% {
    transform: translate(118px, 27px);
  }
  100% {
    transform: translate(-74px, 5px);
  }
}

@keyframes bubble-2-rotate {
  0% {
    transform: translate(114px, 5px);
  }
  33% {
    transform: translate(-55px, 60px);
  }
  66% {
    transform: translate(38px, -25px);
  }
  100% {
    transform: translate(114px, 5px);
  }
}

@keyframes bubble-3-rotate {
  0% {
    transform: translate(39px, -30px);
  }
  33% {
    transform: translate(-74px, 39px);
  }
  66% {
    transform: translate(-117px, -30px);
  }
  100% {
    transform: translate(39px, -30px);
  }
}
</style>