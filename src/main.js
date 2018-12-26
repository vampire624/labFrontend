import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.use(ElementUI)
Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
