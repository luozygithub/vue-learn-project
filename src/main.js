// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import rt from './router/index'//可省略index.js
import './stylesheets/main.scss'
import './modules/rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:rt,
  //
  components: { App },
  template: '<App/>'
})
 