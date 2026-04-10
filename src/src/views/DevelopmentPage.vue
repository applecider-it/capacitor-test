<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

import { auth } from '@/services/auth/auth'
import { showToast } from '@/services/ui/message'

const imageUrl = ref('')

const email = ref('test@example.com')
const password = ref('1234')

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

  router.back();
}

/** 写真を撮る */
const takePhoto = async () => {
  const image = await Camera.getPhoto({
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera
  })

  imageUrl.value = image.dataUrl!
}
</script>

<template>
  <div class="p-10 pt-16">
    <router-link to="/" class="app-btn-primary">戻る</router-link>

    <div class="space-y-5 my-10">
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
        <button @click="logout" class="app-btn-primary"> ログアウト </button>
      </div>
    </div>

    <div class="my-3">
      <img src="../assets/images/Block.png" class="w-[50px]" />
    </div>

    <div>
      <button @click="takePhoto" class="app-btn-primary">
        カメラ起動
      </button>
    </div>
    <div>
      <img v-if="imageUrl" :src="imageUrl" class="w-[200px]" />
    </div>
  </div>
</template>