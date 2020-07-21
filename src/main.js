import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import currency from './filters/currency.js'

Vue.use(VueTabs)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.filter('currency', currency)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
