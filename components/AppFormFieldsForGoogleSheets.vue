<template>
  <div>
    <input
      type="text"
      :name="$store.state.form.name.label"
      :value="this.$store.state.form.name.value"
    />
    <input
      type="text"
      :name="$store.state.form.email.label"
      :value="$store.state.form.email.value"
    />
    <input
      type="text"
      :name="$store.state.form.location.label"
      :value="$store.state.form.location.value"
    />
    <input
      type="text"
      :name="$store.state.form.propertyType.label"
      :value="$store.state.form.propertyType.value"
    />
    <input
      type="text"
      :name="$store.state.form.fundingUsedFor.label"
      :value="$store.state.form.fundingUsedFor.value"
    />
    <input
      type="text"
      :name="$store.state.form.ownershipStatus.label"
      :value="$store.state.form.ownershipStatus.value"
    />
    <input
      type="text"
      :name="$store.state.form.purchasePrice.label"
      :value="$store.state.form.purchasePrice.value"
    />
    <input
      type="text"
      :name="$store.state.form.currentMarketValue.label"
      :value="$store.state.form.currentMarketValue.value"
    />
    <input
      type="text"
      :name="$store.state.form.outstandingDebt.label"
      :value="$store.state.form.outstandingDebt.value"
    />
    <input
      type="text"
      :name="$store.state.form.totalProjectCosts.label"
      :value="$store.state.form.totalProjectCosts.value"
    />
    <input
      type="text"
      :name="$store.state.form.anticipatedGDV.label"
      :value="$store.state.form.anticipatedGDV.value"
    />
    <input
      type="text"
      :name="$store.state.form.borrowAmount.label"
      :value="$store.state.form.borrowAmount.value"
    />
    <input
      type="text"
      :name="$store.state.form.projectDuration.label"
      :value="$store.state.form.projectDuration.value"
    />
    <input
      type="text"
      :name="$store.state.form.exitStrategy.label"
      :value="$store.state.form.exitStrategy.value"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>