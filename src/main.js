import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/o-nas', name: 'O-nas', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
