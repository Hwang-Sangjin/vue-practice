import axios from "axios"
import _uniqBy from "lodash/uniqBy"

export default {
    // module
    namespaced :true,
    // data
    state: () => {
        return {
            movies: []
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
            const {title, type, number, year} = payload
            const OMDB_API_KEY = '7035c60c'
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            const {Search, totalResults} = res.data
            context.commit('updateState',{
                movies: _uniqBy(Search, 'imdbID')
            })
            
            const total = parseInt(totalResults,10)
            const pageLength = Math.ceil(total/10)

            if(pageLength > 1) {
                for(let page = 2;page <= pageLength; page++){
                    if(page > number/ 10) break
                    const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
                    const {Search} = res.data
                    context.commit('updateState', {
                        movies: [...context.state.movies, ..._uniqBy(Search,'imdbID')]
                    })
                }
            }
        }
    }
}