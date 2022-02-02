<template>
    <div class="container">
        <div class="inner">
            <div class="message">
                {{message}}
            </div>
            <div class="movies">
                <MovieItem
                    v-for="movie in movies"
                    :key="movie.imdbID"
                    :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
export default {
    components: {
        MovieItem
    },
    computed: {
        movies (){
            return this.$store.state.movie.movies
        },
        messagw() {
            return this.$store.state.movie.message
        }
    }
}
</script>

<style land="scss" scoped>
.movies{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>