<script setup lang="ts">
import { ref } from 'vue'

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

const imageUrl = ref('')

const email = ref('test@example.com')
const password = ref('1234')

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