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

// Vue.mixin({
//   data() {
//     return {
//       darkMode: false,
//     }
//   },
//   computed: {
//     handleDarkMode() {
//       if (this.darkMode) {
//         return "dark"
//       } else {
//         return ""
//       }
//     }
//   },
//   watch: {
//     // darkMode(darkMode) {
//     //   if (darkMode === true) {
//     //     this.handleDarkMode
//     //     console.log("Dark Mode Changed: ", this.handleDarkMode, darkMode)
//     //   } else {
//     //     this.handleDarkMode
//     //     console.log("Dark Mode Changed: ", this.handleDarkMode, darkMode)
//     //   }
//     // }
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
