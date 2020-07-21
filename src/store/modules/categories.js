import {http} from '../../axios-config.js'

export default {
    state:{
        categories: []
    },
    mutations:{
        updateCategories(state, categories){
            state.categories = categories
        }
    },
    actions:{
        async axiosCategories(context){
            const categories = await http.get('/categories/')
            context.commit('updateCategories', categories.data)
        }
    },
    getters:{
        categories(state){
            return state.categories
        },
        CategoryMore: state => id => {
            return state.categories.find(categories => categories.id === id)
        }
    }
}