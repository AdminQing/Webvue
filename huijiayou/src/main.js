// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('./style/app.scss')
import Vue from 'vue'
import router from './script/router/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template:'<router-view></router-view>'
})
