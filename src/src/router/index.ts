import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import TodoPage from "@/views/TodoPage.vue";
import DevelopmentPage from "@/views/DevelopmentPage.vue";
import AuthPage from "@/views/AuthPage.vue";

import { auth } from "@/services/auth/auth";
import { showToast } from "@/services/ui/message";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      level: 0,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: {
      level: 0,
    },
  },
  {
    path: "/development",
    name: "Development",
    component: DevelopmentPage,
    meta: {
      level: 1,
    },
  },
  {
    path: "/todo",
    name: "todo",
    component: TodoPage,
    meta: {
      requiresAuth: true,
      level: 1,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthPage,
    meta: {
      level: 1,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.checkAuth()) {
    showToast("ログイン必須ページです。", "alert");
    next("/");
  } else {
    next();
  }
});

export default router;
