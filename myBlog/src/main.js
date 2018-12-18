// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import routerConfig from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter(
  routerConfig // (缩写) 相当于 routes: routes
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
