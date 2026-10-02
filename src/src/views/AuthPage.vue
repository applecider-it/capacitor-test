<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

import { auth } from '@/services/auth/auth'
import { showToast } from '@/services/ui/message'

import AppLayout from '@/components/layouts/AppLayout.vue'
import { f } from 'vue-router/dist/router-CWoNjPRp.mjs';

const email = ref('test@example.com')
const password = ref('1234')

const isAuth = ref(false);

const router = useRouter();

/** 擬似的なログイン */
const login = async () => {
  console.log('login')

  const status = await auth.login(email.value, password.value);

  if (status === 200) {
    showToast('ログインしました');

    router.back();
  } else if (status === 401) {
    showToast('ログイン失敗');
  } else {
    showToast('通信エラー');
  }
}

/** 擬似的なログアウト */
const logout = () => {
  console.log('logout')

  auth.logout();

  showToast('ログアウトしました');

  router.back();
}

onMounted(() => {
  isAuth.value = auth.checkAuth();
})
</script>

<template>
  <AppLayout name="認証">
    <div v-if="!isAuth" class="space-y-5">
      <div class="space-y-2">
        <div>
          <input v-model="email" type="text" class="app-form-input" />
        </div>
        <div>
          <input v-model="password" type="text" class="app-form-input" />
        </div>
      </div>

      <div class="space-x-3">
        <button @click="login" class="app-btn-primary"> ログイン </button>
      </div>
    </div>

    <div v-else>
      <div>
        <button @click="logout" class="app-btn-primary"> ログアウト </button>
      </div>
    </div>
  </AppLayout>
</template>