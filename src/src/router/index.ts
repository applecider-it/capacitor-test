import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TodoPage from '../views/TodoPage.vue';
import DevelopmentPage from '../views/DevelopmentPage.vue';

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
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
