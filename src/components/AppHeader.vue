<script>
export default {
  name: "AppHeader",
  data() {
    return {

    }
  },
  methods: {
    onClick() {
      this.$emit('buttonClick')
      console.log('buttonClickEmit');
    },
  }
}
</script>

<template>
  <div>
    <input type="search" placeholder="Search" />
    <button @click="onClick">Search</button>
  </div>
</template>

<style scoped>
input {
  margin: 0px 10px;
}
</style>
