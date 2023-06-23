import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';
import ComicDetail from '../views/ComicDetail.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favoritos',
    component: Favorites
  },
  {
    path: '/comic/:id',
    name: 'ComicDetail',
    component: ComicDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
