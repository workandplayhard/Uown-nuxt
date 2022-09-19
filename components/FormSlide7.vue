<template>
  <div>
    <appLabel :name="$store.state.form.exitStrategy.label" id required />
    <div class="flex mt-4 space-x-3">
      <ButtonCheckCross
        v-for="(e, i) in buttons"
        :key="i"
        :value="e"
        v-model="selected"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import appLabel from "@/components/AppLabel";
import ButtonCheckCross from "@/components/ButtonCheckCross";
import appInput from "@/components/AppInput";

export default {
  components: {
    appLabel,
    ButtonCheckCross,
    appInput,
  },
  data() {
    return {
      buttons: ["Refinance", "Sell"],
    };
  },

  computed: {
    selected: {
      get() {
        return this.$store.state.form.exitStrategy.value;
      },
      set(value) {
        this.$store.commit("form/setExitStrategy", value);
      },
    },
  },
};
</script>

<style>
</style>