/**
 * @Author: linuxers
 * @Date:   2017-06-29T08:59:37+07:00
 * @Email:  kunhernowoputra@gmail.com
 * @Filename: main.js
 * @Last modified by:   linuxers
 * @Last modified time: 2017-06-29T17:41:46+07:00
 */



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import axios from 'axios'
import App from './App'
import router from './router'

window.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
