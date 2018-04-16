import Vue from 'vue'
import App from './app.vue'

const Compon = Vue.extend(App)

new Compon().$mount()

export default {
  install () {
    Vue.prototype.$extend = this
  }
}
