import {http} from '../../axios-config.js'

export default {
    state:{
        user: []
    },
    mutations:{
        updateUser(state, user){
            state.user = user
        }
    },
    actions:{
        async axiosUser(context){
            const user = await http.get('/users/' + localStorage.getItem('id') + '/')
            context.commit('updateUser', user.data)
        },
        userPut(ctx, crenditials){
            return new Promise((resolve,reject) => {
                http.patch('/users/' + localStorage.getItem('id') + '/', JSON.stringify(crenditials))
                .then(res=> {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            })
        }
    },
    getters:{
        userData(state){
            return state.user
        }
    }
}