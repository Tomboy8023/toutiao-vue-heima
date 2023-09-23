import Vue from 'vue'
import App from './App.vue'
import "amfe-flexible"
import 'vant/lib/index.css'
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
