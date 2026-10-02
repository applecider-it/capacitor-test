import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { auth } from '@/services/auth/auth';

import './assets/css/app.css'

auth.setupAuth();

const app = createApp(App)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
