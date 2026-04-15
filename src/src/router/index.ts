import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import TodoPage from '@/views/TodoPage.vue';
import DevelopmentPage from '@/views/DevelopmentPage.vue';
import AuthPage from '@/views/AuthPage.vue';

import { auth } from '@/services/auth/auth'
import { showToast } from '@/services/ui/message'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/development',
    name: 'Development',
    component: DevelopmentPage,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoPage,
    meta: { requiresAuth: true },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.checkAuth()) {
    showToast('ログイン必須ページです。', 'alert');
    next('/')
  } else {
    next()
  }
})

export default router;
