<template>
  <main>
    <div class="container">
      <h2>Movies</h2>
      <div class="grid">
        <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />
        <div v-if="!store.movies.length">
          Nessun film da mostrare
        </div>
      </div>
    </div>
    <div class="container">
      <h2>TV Series</h2>
      <div class="grid">
        <AppCard v-for="serie in store.series" :key="serie.id" :item="serie" />
        <div v-if="!store.series.length">
          Nessua serie da mostrare
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { store } from '../store'
import AppCard from './AppCard.vue';
// import AppSeriesCard from './AppSeriesCard.vue';

export default {
  components: {
    AppCard,
    // AppSeriesCard,
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

  .container {
    border-top: 2px solid red;
    padding-top: 20px;
  }

}

h2 {
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>