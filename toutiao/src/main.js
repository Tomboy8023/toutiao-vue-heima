import Vue from 'vue'
import App from './App.vue'
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
