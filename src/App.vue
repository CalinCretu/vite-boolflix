<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      store,
      API_KEY: '25e224b4d2e69b2bde88f482e9b3a205',
      query: '',
    }
  },
  methods: {
    fetchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.API_KEY,
          query: this.query,
          query: store.search,
        }
      }).then(res => {

        console.log(res.data.results);
      })
    },

  },
  created() {
    this.fetchMovies()
  }
}
</script>

<template>
  <div class="header">
    <AppHeader @searchResult="fetchMovies" />
  </div>
</template>

<style></style>
