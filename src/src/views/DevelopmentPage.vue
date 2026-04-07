<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

import { isAuthenticated } from '@/services/auth/auth'

const imageUrl = ref('')

const router = useRouter();

/** 擬似的なログイン */
const login = () => {
  console.log('login')

  isAuthenticated.value = true;
}

/** 擬似的なログアウト */
const logout = () => {
  console.log('logout')

  isAuthenticated.value = false;
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
  <div class="p-10">
    <router-link to="/" class="app-btn-primary">戻る</router-link>

    <div class="space-y-5 my-10">
      <div class="space-x-3">
        <button @click="login" class="app-btn-primary"> ログイン </button>
        <button @click="logout" class="app-btn-primary"> ログアウト </button>
      </div>
    </div>

    <div>
      <button @click="takePhoto" class="app-btn-primary">
        カメラ起動
      </button>
    </div>
    <div>
      <img v-if="imageUrl" :src="imageUrl" />
    </div>
  </div>
</template>