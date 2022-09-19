<template>
  <div>
    <appSelect :name="$store.state.form.howHeard.label" id="how-hear" :options="options" v-model="howHeard" />
    <fieldsForGoogleSheets class="hidden" />
  </div>
</template>

<script>
import appSelect from "@/components/AppSelect";

export default {
  components: {
    appSelect,
    fieldsForGoogleSheets: () => import('./AppFormFieldsForGoogleSheets')
  },

  data() {
    return {
      options: [
        "Select one...",
        "Word of Mouth",
        "Linkedin",
        "Facebook",
        "Twitter",
        "Instagram",
        "Online Ad",
        "Webinar",
        "Google/Online Search"
      ]
    };
  },

  computed: {
    howHeard: {
      get() {
        return this.$store.state.form.howHeard.value;
      },
      set(value) {
        this.$store.commit("form/setHowHeard", value);
      }
    }
  }
};
</script>

<style>
</style>