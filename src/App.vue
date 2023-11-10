<script>
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'
export default {
  components: {
    AppHeader
  },
  name: 'App',
  data() {
    return {
      API_KEY: '25e224b4d2e69b2bde88f482e9b3a205',
      query: 'Ritorno al futuro',
    }
  },
  methods: {
    fetchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.API_KEY,
          query: this.query,
        }
      }).then(res => {
        console.log(res.data.results);
      })
    },
    AppButtonFunction() {
      console.log('AppClick');
    }
  },
  created() {
    this.fetchMovies()
  }
}
</script>

<template>
  <div class="header">
    <AppHeader @buttonClick="AppButtonFunction" />
  </div>

  <div>
    {{ query }}
  </div>
</template>

<style></style>
