import { createApp } from 'vue';
import App from './App.vue';

import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/pages/Home.vue';
import Offer from '@/pages/Offer.vue';
import About from '@/pages/About.vue';
import Crew from '@/pages/Crew.vue';
import Physio from './pages/Physio.vue';
import Diet from './pages/Diet.vue';
import Shop from './pages/Shop.vue';
import CoachPage from './components/CoachCards/CoachPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/oferta', name: 'Oferta', component: Offer },
  { path: '/kadra', name: 'Kadra', component: Crew },
  { path: '/o-nas', name: 'O-nas', component: About },
  { path: '/fizjoterapia', name: 'Fizjoterapia', component: Physio },
  { path: '/dietetyka', name: 'Dietetyka', component: Diet },
  { path: '/sklep', name: 'Sklep', component: Shop },
  { path: '/kadra/:coachName', name: 'Karta-Trenera', component: CoachPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});



createApp(App)
  .use(router)
  .mount('#app');
