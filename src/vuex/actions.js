export default {
  changeLanguage ({ commit, state }, lang) {
    if (state.lang !== lang) {
      commit('CHANGELANG', lang)
      window.localStorage.setItem('x-language', lang)
    }
  }
}
