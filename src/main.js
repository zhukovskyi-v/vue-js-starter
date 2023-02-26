import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/main.css'
import { router } from './router'
import { store } from './stores/counter'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.use(store)
