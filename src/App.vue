<script>
import axios from 'axios'
export default {
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
        console.log(res.data.result);
      })
    }
  },
  created() {
    this.fetchMovies()
  }
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
