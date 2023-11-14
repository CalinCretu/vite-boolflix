<template>
  <div class="card">
    <img class="img" v-if="item.poster_path" :src="basePath + item.poster_path" alt="">
    <img class="img-netflix" v-else src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">

    <ul class="info">
      <li>Titolo: {{ item.title || item.name }}</li>
      <li>Titolo Originale: {{ item.original_title || item.original_name }}</li>
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
      basePath: 'https://image.tmdb.org/t/p/w342',
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
  box-shadow: 0px 0px 15px rgba(255, 0, 0);
  transition: 0.6s;
  border-radius: 20px;
  position: relative;
  display: flex;

  .img {
    border-radius: 20px;
    object-fit: fill;
  }

  .img-netflix {
    border-radius: 20px;
    object-fit: scale-down;
    transform: rotate(-45deg);
  }

  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 22px;
    padding: 20px;
    color: white;
    background-color: transparent;
    opacity: 0;
    transition: opacity 0.8s;
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
  box-shadow: 0px 0px 25px rgb(255, 255, 255);

  .img,
  .img-netflix {
    opacity: 0.1;
  }

  .info {
    opacity: 1;
  }
}
</style>