export const state = () => ({
  name: {
    label: "Name/Company Name",
    value: ''
  },
  email: {
    label: "Email",
    value: ''
  },
  location: {
    label: "Location",
    value: ''
  },
  propertyType: {
    label: "Property Type",
    value: ''
  },
  fundingUsedFor: {
    label: "What will the funding be used for?",
    value: ''
  },
  ownershipStatus: {
    label: "What is your current ownership status?",
    value: '',
  },
  purchasePrice: {
    label: "Purchase Price",
    value: ''
  },
  currentMarketValue: {
    label: "Current Market Value",
    value: ''
  },
  outstandingDebt: {
    label: "Outsanding Debt",
    value: ''
  },
  totalProjectCosts: {
    label: "Total Project Costs",
    value: ''
  },
  anticipatedGDV: {
    label: "Anticipated GDV",
    value: ''
  },
  borrowAmount: {
    label: "How much would you like to borrow",
    value: ''
  },
  projectDuration: {
    label: "How long is the project (from funding to exit)?",
    value: 3
  },
  exitStrategy: {
    label: "What is your exit strategy?",
    value: ''
  },
  howHeard: {
    label: "How did you hear about us?",
    value: ''
  },
})

export const mutations = {
  updateName(state, value) {
    state.name.value = value
  },
  updateEmail(state, value) {
    state.email.value = value
  },
  updateLocation(state, value) {
    state.location.value = value
  },
  updatePropertyType(state, value) {
    state.propertyType.value = value
  },
  updateFundingUsedFor(state, value) {
    state.fundingUsedFor.value = value
  },
  setOwnershipStatus(state, payload) {
    state.ownershipStatus.value = payload
  },
  setExitStrategy(state, payload) {
    state.exitStrategy.value = payload
  },
  setCurrentMarketValue(state, value) {
    state.currentMarketValue.value = value
  },
  setOutstandingDebt(state, value) {
    state.outstandingDebt.value = value
  },
  setPurchasePrice(state, value) {
    state.purchasePrice.value = value
  },
  setTotalProjectCosts(state, value) {
    state.totalProjectCosts.value = value
  },
  setAnticipatedGDV(state, value) {
    state.anticipatedGDV.value = value
  },
  setBorrowAmount(state, value) {
    state.borrowAmount.value = value
  },
  setProjectDuration(state, value) {
    state.projectDuration.value = value
  },
  setHowHeard(state, value) {
    state.howHeard.value = value
  },
  resetValues(state) {
    state.name.value = state.email.value = state.location.value = state.propertyType.value = state.fundingUsedFor.value = state.ownershipStatus.value = state.purchasePrice.value = state.currentMarketValue.value = state.outstandingDebt.value = state.totalProjectCosts.value = state.anticipatedGDV
      .value = state.borrowAmount.value = state.exitStrategy.value = state.howHeard.value = ''
    state.projectDuration.value = 3
  }
}