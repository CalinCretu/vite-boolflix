<template>
  <header>
    <nav class="nav container">
      <span class="links">
        <span class="title">
          Boolflix
        </span>
        <ul class="pages-links">
          <li><a href="#">Home</a> </li>
          <li><a href="#">Movies</a> </li>
          <li><a href="#">TV Series</a> </li>
        </ul>
      </span>
      <span>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input type="text" @keyup.enter="$emit('search')" v-model.trim="store.searchText" placeholder="Search">
      </span>

    </nav>
  </header>
</template>

<script>
import { store } from '../store'

export default {
  data() {
    return {
      store: store
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-image: linear-gradient(to bottom, black, rgb(49, 49, 49));
  color: white;
  padding: 20px 0px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;


  .links {
    display: flex;
    align-items: center;

    .pages-links {
      display: flex;
      margin: 0 10px;
    }

    .pages-links>* {
      margin: 0 10px;
      font-size: 22px;
      text-shadow: 1px 1px 10px red;
    }
  }

  .title {
    color: red;
    font-size: 60px;
    font-weight: 700;
  }

  input {
    margin-left: 8px;
    color: white;
    background-color: transparent;
    padding: 5px 15px;
    border: none;
    border-bottom: 1px solid red;
    font-size: 18px;
  }

  input:focus {
    outline: none;
    border-bottom: 2px solid red;
  }
}
</style>