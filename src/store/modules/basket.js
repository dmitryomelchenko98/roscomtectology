import {http} from '../../axios-config.js'

export default {
    state:{
        carts: [],
        cart: []
    },
    mutations:{
        updateCart(state, carts){
            state.carts = carts
        },
        updateCartItem(state, cart){
            state.cart = cart
        }
    },
    actions:{
        async axiosCarts(context){
            const carts = await http.get('/carts/')
            context.commit('updateCart', carts.data)
        },
        async axiosCartsItem(ctx){
            const carts = await http.get('/carts/' + `${localStorage.getItem('id')}/`)
            ctx.commit('updateCartItem', carts.data)
        }
    },
    getters:{
        carts(state){
            return state.carts
        },
        cartsItem(state){
            return state.cart
        }
    }
}