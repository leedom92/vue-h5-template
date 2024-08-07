import { defineStore } from 'pinia'
import { showNotify } from 'vant'
import 'vant/lib/notify/style'

export const useUserStore = defineStore('user', {
  state: () => ({
    author: 'Leedom',
  }),
  getters: {
    name: state => `${state.author.toLocaleLowerCase()}92`,
    github() {
      return `https://github.com/${this.name}`
    },
    homepage() {
      return `${this.github}/vue-h5-template`
    },
  },
  actions: {
    greet() {
      showNotify({ type: 'primary', message: `Hello! I'm ${this.author}.` })
    },
  },
})
