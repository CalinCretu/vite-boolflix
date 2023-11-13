import { reactive } from 'vue'

export const store = reactive({
  searchText: '',
  movies: [],
  series: [],
  API_KEY: '25e224b4d2e69b2bde88f482e9b3a205',
  flags: {
    it: '/it.png',
    en: '/en.png',
    fr: '/fr.png',
    es: '/es.png',
  },
})