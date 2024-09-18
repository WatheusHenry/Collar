import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Cadastro from '@/views/CadastroView.vue';
import Login from '@/views/LoginView.vue';




const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/app/home",
  },
  {
    path: '/signin',
    component: Cadastro
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/app',
    component: TabsPage,
    children: [
      {
        path: "/app/home",
        component: () => import("../views/FeedView.vue"),
      },
      {
        path: "/app/create",
        component: () => import("../views/CreatePublicationView.vue"),
      },
      {
        path: "/app/search",
        component: () => import("../views/SearchView.vue"),
      },
      {
        path: '/app/details/:id',
        component: () => import('../views/PublicationDetailsView.vue'),
      },
      {
        path: "/app/publication",
        component: () => import("../views/PublicationView.vue"),
      },
      {
        path: "/app/profile",
        component:()=> import("../views/ProfileView.vue")
      },
      {
        path: "/app/savedpublication",
        component: () => import("../views/SavedPublications.vue"),
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
