import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      darkMode: false,
      handleDarkMode: "light"
    }
  },
  watch: {
    darkMode(darkMode) {
      if (darkMode === true) {
        this.handleDarkMode = "dark"
      } else {
        this.handleDarkMode = "light"
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
