import { defineStore } from 'pinia'
import { Notify } from 'vant'

export const useUserStore = defineStore('user', {
  state: () => ({
    author: 'Leedom'
  }),
  getters: {
    name: (state) => state.author.toLocaleLowerCase() + '92',
    github() {
      return `https://github.com/${this.name}`
    },
    homepage() {
      return `${this.github}/vue-h5-template`
    }
  },
  actions: {
    greet() {
      Notify({ type: 'primary', message: `Hello! I'm ${this.author}.` })
    }
  }
})
