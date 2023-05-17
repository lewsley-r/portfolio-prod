import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueWriter from "vue-writer";
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.use(VueWriter)
.mount('#app')
