// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//導入組件
import Vue from 'vue'
//導入組件時，後綴(.vue)可以不寫
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },   //組件必須是先註冊後使用
  template: '<App/>'
})
