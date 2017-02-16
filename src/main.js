import Vue from 'vue'
import store from './vuex'

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
