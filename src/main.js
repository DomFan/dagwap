import Vue from 'vue'
import app from './app.vue'
import router from './router'
import MintUI from 'mint-ui'
import VueScroller from 'vue-scroller'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'

Vue.use(MintUI)
Vue.use(VueScroller)
Vue.use(VeeValidate)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
