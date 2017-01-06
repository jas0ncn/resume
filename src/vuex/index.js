import Vue from 'vue'
import Vuex from 'vuex'
import data from './data'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// load language data to vuex
let language = window.localStorage.getItem('x-language')
if (!language) {
  window.localStorage.setItem('x-language', 'cn')
  language = 'cn'
}
document.title = data[language].website.title

// create store
export default new Vuex.Store({
  state: {
    lang: language,
    data: data[language]
  },
  actions,
  mutations
})

