<<<<<<< HEAD
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import Login from "@/views/Login.vue";
=======
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Cadastro from '@/views/Cadastro.vue';

>>>>>>> 773eba9e7c1bdf75737c42e67f2670c460a87f7c

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/app/home",
  },
  {
<<<<<<< HEAD
    path: "/login",
    component: Login,
  },
  {
    path: "/app",
    component: TabsPage,
=======
    path: '/signin',
    component:Cadastro
  },
  {
    path: '/app',
    component:TabsPage,
>>>>>>> 773eba9e7c1bdf75737c42e67f2670c460a87f7c
    children: [
      {
        path: "/app/home",
        component: () => import("../views/Feed.vue"),
      },
      {
        path: "/app/create",
        component: () => import("../views/CreatePublication.vue"),
      },
      {
        path: "/app/search",
        component: () => import("../views/Search.vue"),
      },
      {
        path: "/app/details/:pubId",
        component: () => import("../views/PublicationDetails.vue"),
      },
      {
        path: "/app/profile",
        component: () => import("../views/Profile.vue"),
      },
<<<<<<< HEAD
    ],
  },
];
=======
    

    ]
  }
]
>>>>>>> 773eba9e7c1bdf75737c42e67f2670c460a87f7c

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
