import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
import vConsole from 'vconsole'

console.log('test')

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

// fastclick使用到整个body上 是整个应用上的点击没有300豪秒延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
