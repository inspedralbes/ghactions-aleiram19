import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar assets para asegurar que se incluyan en la construcción
import './assets'

createApp(App).use(router).mount('#app')
