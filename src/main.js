import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import Nprogress from 'nprogress'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'

import router from './router'

// 使用nprogress 全局路由进度条
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})
router.afterEach((to) => {
  Nprogress.done()
})

Vue.use(ElementUI)
Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
