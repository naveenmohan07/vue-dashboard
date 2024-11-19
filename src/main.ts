import './styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('capitalize', {
  beforeMount(el) {
    el.textContent = el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1)
  },
})

app.use(router)
app.mount('#app')
