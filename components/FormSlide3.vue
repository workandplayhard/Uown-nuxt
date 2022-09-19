<template>
  <wrapper>
    <h1
      class="text-xl opacity-60 font-family-bold required"
    >{{$store.state.form.ownershipStatus.label}}</h1>
    <div class="space-y-3 sm:flex sm:space-y-0 sm:space-x-3">
      <FormBox
        v-for="(e, i) in boxes"
        :key="i"
        :value="e"
        v-model="selected"
        class="w-full"
      />
    </div>
  </wrapper>
</template>

<script>
import wrapper from "@/components/FormContentWrapper";
import FormBox from "@/components/FormBox";
import appInput from "@/components/AppInput";

export default {
  components: {
    wrapper,
    FormBox,
    appInput
  },

  data() {
    return {
      boxes: ["I own it", "I'm buying it", "I control it"],
    };
  },

  computed: {
    selected: {
      get() {
        return this.$store.state.form.ownershipStatus.value
      },
      set(value) {
        this.$store.commit("form/setOwnershipStatus", value);
      }
    }
  },
};
</script>

<style>
</style>