import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import Cadastro from '@/views/CadastroView.vue';
import Login from '@/views/LoginView.vue';
import { isAuthenticated } from '@/utils/auth';  // Importe a função de autenticação

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
    component: Login,
    meta: { transition: 'slide-left' },

  },
  {
    path: '/app',
    component: TabsPage,
    meta: { requiresAuth: true },  // Protege todas as rotas dentro de /app
    children: [
      {
        path: "/app/home",
        component: () => import("../views/FeedView.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/app/create",
        component: () => import("../views/CreatePublicationView.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/app/search",
        component: () => import("../views/SearchView.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: '/app/details/:id',
        component: () => import('../views/PublicationDetailsView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: "/app/publication",
        component: () => import("../views/PublicationView.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/app/profile",
        component: () => import("../views/ProfileView.vue"),
        meta: { requiresAuth: true },
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Guard de navegação global para proteger as rotas
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Se a rota exigir autenticação e o usuário não estiver logado
    if (!isAuthenticated()) {
      next('/login');  // Redireciona para a página de login
    } else {
      next();  // Permite acesso à rota
    }
  } else {
    next();  // Para rotas que não requerem autenticação
  }
});


export default router;
