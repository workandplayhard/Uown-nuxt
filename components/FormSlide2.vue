<template>
  <wrapper>
    <appInput
      :name="$store.state.form.location.label"
      id="location"
      v-model="location"
      class="top"
    />
    <appSelect
      :name="$store.state.form.propertyType.label"
      id="property-type"
      :options="optionsPropertyTypes"
      class="left mr-4"
      v-model="propertyType"
    />
    <appSelect
      :name="$store.state.form.fundingUsedFor.label"
      id="funding-used-for"
      :options="optionsFundingUsedFor"
      v-model="fundingUsedFor"
      class="right"
    />
  </wrapper>
</template>

<script>
import wrapper from "@/components/FormContentWrapper";
import appInput from "@/components/AppInput";
import appSelect from "@/components/AppSelect";

export default {
  components: {
    wrapper,
    appInput,
    appSelect
  },

  data() {
    return {
      optionsPropertyTypes: [
        "Select one...",
        "Residential",
        "Commercial",
        "Mixed Use",
        "HMO",
        "Land",
        "Other"
      ],
      optionsFundingUsedFor: [
        "Select one...",
        "New Build",
        "Extension/Refurbishment",
        "Project Refinancing",
        "Bridging Finance",
        "Auction Purchase",
        "Auction Purchase and Project Costs"
      ]
    };
  },

  computed: {
    location: {
      get() {
        return this.$store.state.form.location.value;
      },
      set(value) {
        this.$store.commit("form/updateLocation", value);
      }
    },
    propertyType: {
      get() {
        return this.$store.state.form.propertyType.value;
      },
      set(value) {
        this.$store.commit("form/updatePropertyType", value);
      }
    },
    fundingUsedFor: {
      get() {
        return this.$store.state.form.fundingUsedFor.value;
      },
      set(value) {
        this.$store.commit("form/updateFundingUsedFor", value);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/_variables";

@media (min-width: $sm) {
  .top {
    grid-area: top;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }
  
  .wrapper {
    grid-template-areas:
      "top top"
      "left right";
  }
}
</style>