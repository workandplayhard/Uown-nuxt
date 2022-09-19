import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

// export default ({ store }) => {
//   window.onNuxtReady(() => {
//     createPersistedState({
//       paths: ['persist'],
//       storage: {
//         getItem: key => Cookies.get(key),
//         setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: false }),
//         removeItem: key => Cookies.remove(key)
//       }
//     })(store)
//   })
// }

export default ({ store }) => {
  createPersistedState({
    paths: ['persist'],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 30, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}