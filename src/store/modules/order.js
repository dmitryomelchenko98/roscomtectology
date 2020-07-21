import {http} from '../../axios-config.js'

export default {
    state:{
        order: []
    },
    mutations:{
        updateOrder(state, order){
            state.order = order
        }
    },
    actions:{
        OrderAdd(context, credentials){
            return new Promise((resolve, reject) => {
              http.post('/orders/', JSON.stringify(credentials))
              .then(res=>{
                resolve(res)
              })
              .catch(err=>{
                reject(err)
              })
            })
        },
        async axiosOrder(context){
            const order = await http.get('/orders/')
            context.commit('updateOrder', order.data)
        },
    },
    getters:{
        order(state){
            return state.order
        },
        
    }
}