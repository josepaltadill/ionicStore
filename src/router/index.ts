import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/catalogue/list'
  },
  {
    path: '/catalogue/grid',
    component: () => import ('../views/CatalogueGrid.vue')
  },
  {
    path: '/catalogue/list',
    component: () => import ('../views/CatalogueList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
