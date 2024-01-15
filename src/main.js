import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPersistedState from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPersistedState)
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
