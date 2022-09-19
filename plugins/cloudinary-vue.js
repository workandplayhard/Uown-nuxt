import Vue from 'vue';
import Cloudinary, { CldImage, CldPlaceholder } from "cloudinary-vue";

Vue.use(Cloudinary, {
  configuration: { cloudName: "uown-sd" },
  components: {
    CldImage,
    CldPlaceholder,
  }
});