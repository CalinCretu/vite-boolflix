<script>
import { store } from '../store'
export default {
  name: "AppHeader",
  components: {

  },

  data() {
    return {
      store: store,
      query: '',
    }
  },
  methods: {
    searchResult() {
      this.$emit('searchResult', this.query)
    },
  }
}
</script>

<template>
  <div>
    <input @keyup.enter="searchResult" type="text" placeholder="Search Title" v-model="store.search" />
    <button @click="searchResult">Search</button>
  </div>
</template>

<style scoped>
input {
  margin: 0px 10px 10px 0px;
}
</style>