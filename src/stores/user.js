import { showNotify } from 'vant'
import 'vant/lib/notify/style'

export const useUserStore = defineStore('user', () => {
  const author = ref('Leedom')

  const name = computed(() => author.value ? `${author.value.toLocaleLowerCase()}92` : '')
  const github = computed(() => author.value ? `https://github.com/${name.value}` : '')
  const homepage = computed(() => author.value ? `${github.value}/vue-h5-template` : '')

  const greet = () => {
    showNotify({ type: 'primary', message: `Hello! I'm ${author.value}.` })
  }

  function $reset() {
    author.value = ''
  }

  return {
    author,
    name,
    github,
    homepage,
    greet,
    $reset,
  }
})
