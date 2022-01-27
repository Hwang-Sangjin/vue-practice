import axios from "axios"
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
                movies: Search
            })
        }
    }
}