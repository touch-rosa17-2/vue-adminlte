import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
// js
import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.min.js?3.2.0'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
