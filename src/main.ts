import './styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { appStore } from './core/store/app.store'

const app = createApp(App)

app.directive('capitalize', {
  beforeMount(el) {
    el.textContent = el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1)
  },
})

app.directive('percentage', {
  beforeMount(el) {
    el.textContent = `${(el.textContent * 100).toFixed(2)}%`
  },
})

app.use(router)
app.use(appStore)
app.mount('#app')
