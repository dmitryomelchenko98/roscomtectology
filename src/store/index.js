import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import products from './modules/catalog.js'
import categories from './modules/categories.js'
import user from './modules/user.js'
import carts from './modules/basket.js'
import order from './modules/order.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,products,categories,user,carts,order
  }
})
