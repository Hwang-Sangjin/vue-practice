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
    getters: {
        movieIds(state) {
            return state.movies.map(m => m.imdbID)
        }
    },
    // methods
    // 변이, data 변경
    mutations: {
        resetMovies(state){
            state.movies = []
        }
    },
    // 비동기
    actions: {
        searchMovies(context){
            context.state
            context.getters
            context.commit
        }
    }
}