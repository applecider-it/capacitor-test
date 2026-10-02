<script setup lang="ts">
import { ref } from 'vue'

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

import AppLayout from '@/components/layouts/AppLayout.vue'

const imageUrl = ref('')

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
  <AppLayout name="カメラ動作確認">
    <div>
      <button @click="takePhoto" class="app-btn-primary">
        カメラ起動
      </button>
    </div>
    <div class="mt-10">
      <img v-if="imageUrl" :src="imageUrl" class="w-[200px]" />
    </div>
  </AppLayout>
</template>