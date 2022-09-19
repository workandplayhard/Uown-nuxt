<template>
  <wrapper>
    <appInput
      type="number"
      :name="$store.state.form.totalProjectCosts.label"
      id="total-project-costs"
      v-model="totalProjectCosts"
      class="top"
    />
    <appInput
      type="number"
      :name="$store.state.form.anticipatedGDV.label"
      id="anticipated-gdv"
      class="left mr-4"
      v-model="anticipatedGDV"
    />
    <appInput
      type="number"
      :name="$store.state.form.borrowAmount.label"
      id="borrow-amount"
      v-model="borrowAmount"
      class="right"
    />
  </wrapper>
</template>

<script>
import wrapper from "@/components/FormContentWrapper";
import appInput from "@/components/AppInput";

export default {
  components: {
    wrapper,
    appInput
  },
  computed: {
    totalProjectCosts: {
      get() {
        return this.$store.state.form.totalProjectCosts.value;
      },
      set(value) {
        this.$store.commit("form/setTotalProjectCosts", value);
      }
    },
    anticipatedGDV: {
      get() {
        return this.$store.state.form.anticipatedGDV.value;
      },
      set(value) {
        this.$store.commit("form/setAnticipatedGDV", value);
      }
    },
    borrowAmount: {
      get() {
        return this.$store.state.form.borrowAmount.value;
      },
      set(value) {
        this.$store.commit("form/setBorrowAmount", value);
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