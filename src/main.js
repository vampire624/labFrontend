import Vue from 'vue'
import App from './App.vue'
import {Row, Col, Button, Carousel, CarouselItem, Table, TableColumn, Menu, MenuItem, Submenu, Card, Loading, Notification} from 'element-ui'
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

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Card)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
