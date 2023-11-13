<template>
  <div class="card">
    <div><img class="bkg-img" :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt=""></div>
    <ul class="info">
      <li>Titolo: {{ item.title }}</li>
      <li>Titolo Originale: {{ item.original_title }}</li>
      <li>
        <span>Lingua: </span>
        <img height="10" v-if="srcFlag" :src="srcFlag" alt="">
        <p v-else> {{ item.original_language }}</p>
      </li>
      <li v-if="(item.vote_average === '' || item.vote_average === 0)">
        Nessuna recensione ancora disponibile
      </li>
      <li v-else>
        <span>Voto :</span>
        <span class="voto" v-for="stars in  Math.round(item.vote_average / 2) ">
          <font-awesome-icon icon="fa-solid fa-star" />
        </span>
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
  position: relative;

  .bkg-img {
    border-radius: 10px;
    display: block;
  }

  .info {
    display: none;
    position: absolute;
    padding: 8px;
    color: white;
    background-color: black;
    border-radius: 10px;
    top: 0;
    height: 100%;
  }

  .voto {
    width: 30px;
    color: gold;
  }
}

.card>* {
  line-height: 1.5rem;
}

.card:hover {
  .bkg-img {
    display: none;
  }

  .info {
    display: block;
  }
}
</style>