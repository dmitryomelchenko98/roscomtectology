import {http} from '../../axios-config.js'

export default {
    state:{
        catalog: []
    },
    mutations:{
        updateCatalog(state, catalog){
            state.catalog = catalog
        }
    },
    actions:{
        async axiosCatalog(context){
            const catalog = await http.get('/products/')
            context.commit('updateCatalog', catalog.data)
        },
        addCarts(ctx, crenditials){
            return new Promise((resolve, reject) => {
                http.patch(`/carts/${localStorage.getItem('id')}/` , JSON.stringify(crenditials))
            })
            .then(res=>{
              resolve(res)
            })
            .catch(err=>{
              reject(err)
            })
        },
        FiltCatalog(ctx, crenditials){
            http.get('/products/', {
                params: crenditials
            })
            .then((res) => {
                ctx.commit('updateCatalog', res.data)
            })
        },
        SearchProduct(ctx, crenditials){
            http.get('/products/', {
                params: crenditials
            })
            .then((res) => {
                ctx.commit('updateCatalog', res.data)
            })
        }
    },
    getters:{
        catalog(state){
            return state.catalog
        },
        productInfo: state => id => {
            return state.catalog.find(catalog => catalog.id === id)
        }
    }
}