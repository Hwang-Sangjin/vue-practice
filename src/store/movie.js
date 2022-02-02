import axios from "axios"
import _uniqBy from "lodash/uniqBy"

export default {
    // module
    namespaced :true,
    // data
    state: () => {
        return {
            movies: [],
            message: '',
            loading: false
        }
    },
    //computed
    getters: {},
    // methods
    // 변이, data 변경
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state){
            state.movies = []
        }
    },
    // 비동기
    actions: {
        async searchMovies(context, payload){
            
            try{
                const res = await _fetchMovie({
                    ...payload,
                    page: 1
                })
                const {Search, totalResults} = res.data
                context.commit('updateState',{
                    movies: _uniqBy(Search, 'imdbID')
                })
                
                const total = parseInt(totalResults,10)
                const pageLength = Math.ceil(total/10)
    
                if(pageLength > 1) {
                    for(let page = 2;page <= pageLength; page++){
                        if(page > payload.number/ 10) break
                        const res = await _fetchMovie({
                            ...payload,
                            page: page
                        })
                        const {Search} = res.data
                        context.commit('updateState', {
                            movies: [...context.state.movies, ..._uniqBy(Search,'imdbID')]
                        })
                    }
                }
            } catch(message) {
                commit('updateState', {
                    movies: [],
                    message: message
                })
            }
            
        }
    }
} 

function _fetchMovie(payload) {
    const {title, type, year, page} = payload
    const OMDB_API_KEY = '7035c60c'
    const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                if(res.data.Error){
                    reject(res.data.Error)
                }
                resolve(res)
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}