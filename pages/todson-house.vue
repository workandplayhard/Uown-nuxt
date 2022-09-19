<template>
  <div
    class="
      main
      relative
      min-h-screen
      grid
      lg:items-center
      bg-no-repeat
      overflow-hidden
    "
  >
    <div class="logos-wrapper flex justify-between mx-6 mt-6 items-center">
      <AppImage
        :source="require('@/assets/images/UOWNxICONINC_MOB.png')"
        :sourceWebp="require('@/assets/images/UOWNxICONINC_MOB.png?webp')"
        :lazyLoad="false"
        class="w-48 object-contain md:hidden"
      />
      <AppImage
        :source="require('@/assets/images/UOWNxICONINC_WEB.png')"
        :sourceWebp="require('@/assets/images/UOWNxICONINC_WEB.png?webp')"
        :lazyLoad="false"
        class="logo-web hidden md:block"
      />
      <AppImage
        :source="require('@/assets/images/UOWN_TRUSTPIOLT-01.png')"
        :sourceWebp="require('@/assets/images/UOWN_TRUSTPIOLT-01.png?webp')"
        :lazyLoad="false"
        class="
          trustpilot
          md:absolute
          bottom-0
          w-24
          md:w-32
          transform
          md:-translate-y-4
        "
      />
      <nuxt-link to="/" class="uown-link absolute h-8 w-12 md:w-24"></nuxt-link>
      <a
        href="https://www.iconinc.co.uk/"
        class="iconinc-link absolute left-0 h-8 px-16 transform translate-x-24"
      ></a>
    </div>
    <div class="container grid lg:grid-cols-2 z-1">
      <div class="content mt-12 md:mt-24 lg:mt-0 md:mx-12 lg:mr-0">
        <h1 class="heading font-family-bold text-3xl leading-tight">
          Todson House Investment Opportunity
        </h1>
        <p class="p text-xl mt-4">
          Todson House is our first joint venture with ICONINC. Over a 29-month
          term, it will yield a 24.17% return, with payouts made both monthly
          and annually.
        </p>
        <p class="p text-xl">Enter your details to download the brochure.</p>
        <form class="form mt-6" @submit.prevent="sendEmail" name="brochure">
          <div class="inputs-wrapper">
            <input
              type="text"
              placeholder="First Name"
              name="First Name"
              v-model="firstName"
              class="input mb-4"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              v-model="email"
              class="input"
              required
            />
          </div>
          <div class="sm:flex items-center mt-6">
            <SubmitButton
              text="Download the brochure"
              :success="APICallStatus"
              @reset-state="APICallStatus = $event"
              class="btn text-lg mb-2 sm:mb-0 sm:mr-4"
            />
            <span>Capital at risk.</span>
          </div>
        </form>
      </div>
    </div>
    <div class="img-wrapper absolute bottom-0 right-0">
      <AppImage
        :source="require('@/assets/images/CROP_2.png')"
        :sourceWebp="require('@/assets/images/CROP_2.png?webp')"
        :lazyLoad="false"
        class="lg:hidden"
        imgClasses="object-contain"
      />
      <AppImage
        :source="require('@/assets/images/CROP_1.png')"
        :sourceWebp="require('@/assets/images/CROP_1.png?webp')"
        :lazyLoad="false"
        class="hidden lg:block"
        imgClasses="object-contain"
      />
    </div>
  </div>
</template>

<script>
import formToGoogleSheet from "@/mixins/formToGoogleSheet";
import axios from "axios";

export default {
  layout: "empty",

  components: {
    SubmitButton: () => import("@/components/SubmitButton"),
    AppImage: () => import("@/components/AppImage"),
  },

  head() {
    return {
      title: "Todson House Investment Opportunity",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Todson House is our first joint venture with ICONINC. Over a 30-month term, it will yield a 27.5% return, with payouts made both monthly and annually.",
        },
      ],
      link: [
        { href: this.fullCanonicalURL, rel: "canonical" },
        {
          href: require("@/assets/images/CROP_2.png?webp"),
          rel: "preload",
          as: "image",
          media: "(max-width: 767px)",
        },
        {
          href: require("@/assets/images/CROP_1.png?webp"),
          rel: "preload",
          as: "image",
          media: "(min-width: 768px)",
        },
      ],
    };
  },

  data: () => ({
    firstName: "",
    email: "",
    APICallStatus: -1,
  }),

  methods: {
    sendEmail() {
      this.APICallStatus = 2;
      axios(
        `https://hooks.zapier.com/hooks/catch/2117378/ovtr046?to=${this.email}&name=${this.firstName}`
      )
        .then(() => {
          this.APICallStatus = 1;
          this.firstName = this.email = "";
        })
        .catch((err) => {
          this.APICallStatus = 0;
          console.log(err);
        });
      this.formToGoogleSheet(
        "https://script.google.com/macros/s/AKfycbzndduGNzZOLshoIIcddamKtBOBKkv9v56OTpb6zybjLvRyVLlwTLQ-C9x44BhO5pzYXA/exec",
        "brochure"
      );
    },
  },

  mixins: [formToGoogleSheet],
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

.main {
  grid-template-rows: auto 1fr;

  &::before {
    content: "";
    position: absolute;
    background-image: url("~@/assets/images/rounded-box-2-gray.svg");
    background-size: contain;
    width: 35rem;
    height: 35rem;
    top: -18rem;
    z-index: -1;
    left: -16rem;
    transform: rotate(30deg);
    background-repeat: no-repeat;
  }
}

.img-wrapper {
  width: 80%;
  max-width: 36rem;

  &::before {
    content: "";
    position: absolute;
    background-image: url("~@/assets/images/ellipse-gray.svg");
    bottom: -50%;
    left: 50%;
    transform: scale(2);
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.input {
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  width: 80%;
  outline: none;
  border-width: 2px;
  border-color: transparent;
  transition: border-color 150ms;
  font-size: 1rem;

  &:focus {
    border-color: transparentize($blue, 0.85);
  }
}

.btn {
  width: 15rem;
}

@media (min-width: $md) {
  .main::before {
    width: 56rem;
    height: 56rem;
    top: -32rem;
    left: -19rem;
  }

  .logos-wrapper {
    font-size: 15px;
  }

  .logo-web {
    width: 26em;
  }

  .uown-link,
  .iconinc-link {
    height: 3em;
  }

  .uown-link {
    width: 9.25em;
  }

  .iconinc-link {
    margin-left: 13em;
    padding: 0px 7.5em;
    transform: translateX(0);
  }

  .trustpilot {
    width: 9.5em;
  }

  .content {
    font-size: 23px;
  }

  .heading {
    font-size: 1.875em;
  }

  .p {
    font-size: 1.25em;
  }
}

@media (min-width: $lg) {
  .main::before {
    display: none;
  }

  .logos-wrapper {
    font-size: 11.5px;
  }

  .img-wrapper {
    width: 50%;
    max-width: unset;

    &::before {
      bottom: unset;
      top: -70%;
      left: 30%;
      transform: scale(1.3);
    }
  }

  .content {
    font-size: 18px;
  }
}

@media (min-width: 1440px) {
  .logos-wrapper {
    font-size: 16.5px;
  }

  .content {
    margin-left: 0;
    font-size: 20px;
  }

  .form {
    font-size: 1.05em;
  }

  .input {
    font-size: 1em;
  }

  .btn {
    font-size: 1.125em;

    ::v-deep button {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
}

@media (min-width: 1920px) {
  .container {
    max-width: 1600px;
  }

  .content {
    font-size: 24px;
  }

  .inputs-wrapper {
    display: flex;
  }

  .input:first-child {
    margin-bottom: 0;
    margin-right: 1rem;
  }
}
</style>