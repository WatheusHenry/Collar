import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/app/home',
  },
  {
    path: '/app',
    component:TabsPage,
    children: [
      {
        path: '/app/home',
        component: () => import('../views/Feed.vue'),
      },
      {
        path: "/app/create",
        component: () => import('../views/CreatePublication.vue')
      },
      {
        path: "/app/search",
        component: () => import('../views/Search.vue')
      },
      {
        path: "/app/details/:pubId",
        component: () => import('../views/PublicationDetails.vue')
      },
      {
        path: "/app/profile",
        component: () => import('../views/Profile.vue')
      },

      {
        path: "/app/login",
        component: () => import('../views/Login.vue')
      },
    

    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
