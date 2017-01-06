import Vue from 'vue'
import router from './router'
import store from './vuex'

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
