export const state = () => ({
  dontShowAboutRisk: false,
  cookieAlertVisible: true
})

export const mutations = {
  updateAboutRiskVisibility: (state, payload) => state.dontShowAboutRisk = payload,
  hideCookieAlert: state => state.cookieAlertVisible = false
}