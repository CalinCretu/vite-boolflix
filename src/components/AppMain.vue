<template>
  <main>
    <div class="container">
      <h2>Movies</h2>
      <div class="grid">
        <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
        <div class="no-input-search" v-if="!store.movies.length">
          Search your favourite Movies
        </div>
      </div>
    </div>
    <div class="container">
      <h2>TV Series</h2>
      <div class="grid">
        <AppCard v-for="serie in store.series" :key="serie.id" :item="serie" />
        <div class="no-input-search" v-if="!store.series.length">
          Search your favourite TV Series
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { store } from '../store'
import AppCard from './AppCard.vue';

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      store: store
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
  background-image: linear-gradient(to bottom, rgb(49, 49, 49), black);
  min-height: 100vh;

  .container {
    border-top: 2px solid red;
    padding: 40px 0px;
  }
}

h2 {
  font-size: 30px;
  color: white;
  margin-bottom: 40px;
  text-shadow: 1px 1px 10px red;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  .no-input-search {
    color: white;
    font-size: 18px;
  }
}
</style>