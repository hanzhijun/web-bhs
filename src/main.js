// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import axios from 'axios'
import JsEncrypt from 'jsencrypt'
import CryptoJS from 'crypto-js'
import VueWechatTitle from 'vue-wechat-title'
import {global} from '@/util/global'
import {Classify} from './common/json/data'

Vue.config.productionTip = false

Vue.prototype.$routes = routes
// 加密设置
Vue.prototype.$jsEncrypt = JsEncrypt
Vue.prototype.$cryptoJS = CryptoJS
// 公共方法集成
Vue.prototype.$global = global
// 异步请求数据
Vue.prototype.$ajax = axios

Vue.prototype.$classify = Classify

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.use(VueRouter)
Vue.use(VueWechatTitle)

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})

new Vue({
  router,
  store
}).$mount('#app')
