<template>
  <div class="flex flex-col">
    <appLabel
      :name="$store.state.form.projectDuration.label"
      id="project-duration"
      class="mb-3"
      required
    />
    <div class="flex justify-between opacity-60 text-lg">
      <span class="min">{{min}} months</span>
      <span class="max">{{max}} months</span>
    </div>
    <input
      type="range"
      id="project-duration"
      :min="min"
      :max="max"
      :step="3"
      v-model="projectDuration"
      class="w-full"
      :name="$store.state.form.projectDuration.label"
    />
    <p
      class="value text-center p-4 text-salmon font-family-bold text-3xl"
    >{{$store.state.form.projectDuration.value}} months</p>
  </div>
</template>

<script>
import appInput from "@/components/AppInput";
import appLabel from "@/components/AppLabel";

export default {
  components: {
    appInput,
    appLabel
  },

  data() {
    return {
      min: 3,
      max: 24
    };
  },

  computed: {
    projectDuration: {
      get() {
        return this.$store.state.form.projectDuration.value;
      },
      set(value) {
        this.$store.commit("form/setProjectDuration", value);
      }
    }
  }
};
</script>

<style>
</style>