<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
import axios from 'axios';
export default {
  components: {
    AppMain,
    AppHeader,
  },
  data() {
    return {
      store: store,
    }
  },
  methods: {
    fetchData() {
      if (this.store.searchText === '') {
        store.movies = [];
        store.series = [];
        return
      }
      axios.all([
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchText,
            language: 'it-IT'
          }
        }),
        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchText,
            language: 'it-IT'
          }
        })
      ])
        .then(resposes => {
          const [movies, series] = resposes;
          this.store.series = series.data.results;
          this.store.movies = movies.data.results;
        })
        .catch(err => {
          console.log(err, err.response)
        })
    }
  }
}
</script>

<template>
  <AppHeader @search="fetchData" />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss';
</style>