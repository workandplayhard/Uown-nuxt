<template>
  <wrapper>
    <appInput :name="$store.state.form.name.label" id="name" v-model='name' />
    <appInput :name="$store.state.form.email.label" id="email" type="email" v-model="email" />
  </wrapper>
</template>

<script>
import appInput from "@/components/AppInput";
import wrapper from "@/components/FormContentWrapper";

export default {
  components: {
    appInput,
    wrapper
  },

  computed: {
    name: {
      get() {
        return this.$store.state.form.name.value
      },
      set(value) {
        this.$store.commit('form/updateName', value)
      }
    },
    email: {
      get() {
        return this.$store.state.form.email.value
      },
      set(value) {
        this.$store.commit('form/updateEmail', value)
      }
    }
  }
};
</script>

<style>
</style>