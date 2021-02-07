import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/catalogue/grid'
  },
  {
    path: '/catalogue/grid',
    component: () => import ('../views/CatalogueGrid.vue')
  },
  {
    path: '/catalogue/list',
    component: () => import ('../views/CatalogueList.vue')
  },
  {
    path: '/catalogue/form',
    component: () => import ('../views/CatalogueForm.vue')
  },
  {
    name: 'product',
    path: '/product/:id',
    component: () => import ('../views/Product.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
