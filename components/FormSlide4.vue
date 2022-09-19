<template>
  <div>
    <appInput
      v-if="$store.state.form.ownershipStatus.value == buying"
      type="number"
      :name="$store.state.form.purchasePrice.label"
      id="purchase-price"
      v-model="purchasePrice"
    />
    <wrapper v-else>
      <appInput
        type="number"
        :name="$store.state.form.currentMarketValue.label"
        id="current-market-value"
        v-model="currentMarketValue"
      />
      <appInput
        type="number"
        :name="$store.state.form.outstandingDebt.label"
        id="outsanding-debt"
        v-model="outstandingDebt"
      />
    </wrapper>
  </div>
</template>

<script>
import wrapper from "@/components/FormContentWrapper";
import appInput from "@/components/AppInput";

export default {
  components: {
    wrapper,
    appInput
  },

  data() {
    return {
      buying: "I'm buying it"
    };
  },

  computed: {
    currentMarketValue: {
      get() {
        return this.$store.state.form.currentMarketValue.value;
      },
      set(value) {
        this.$store.commit("form/setCurrentMarketValue", value);
      }
    },
    outstandingDebt: {
      get() {
        return this.$store.state.form.outstandingDebt.value;
      },
      set(value) {
        this.$store.commit("form/setOutstandingDebt", value);
      }
    },
    purchasePrice: {
      get() {
        return this.$store.state.form.purchasePrice.value;
      },
      set(value) {
        this.$store.commit("form/setPurchasePrice", value);
      }
    }
  }
};
</script>

<style>
</style>