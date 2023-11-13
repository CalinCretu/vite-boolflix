<template>
  <div class="card">
    <div><img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt=""></div>
    <ul>
      <li>{{ item.name }}</li>
      <li>{{ item.original_name }}</li>
      <li>
        <img height="10" v-if="srcFlag" :src="srcFlag" alt="">
        <p v-else>{{ item.original_language }}</p>
      </li>
      <li v-if="(item.vote_average === '' || item.vote_average === 0)">
        Nessuna recensione
      </li>
      <li v-else>
        <span>Voto :</span>
        <div v-for="stars in  Math.round(item.vote_average / 2) "><span class="star"><font-awesome-icon
              icon="fa-solid fa-star" /></span></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      store,
    }
  },
  computed: {
    srcFlag() {
      return this.store.flags[this.item.original_language]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: 2px solid black;
  border-radius: 10px;

  .star {
    color: gold;
  }
}
</style>