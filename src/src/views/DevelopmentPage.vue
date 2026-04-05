<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonButtons,
  IonBackButton,
} from '@ionic/vue';

import { useRouter } from 'vue-router';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

import { isAuthenticated } from '@/services/auth/auth'

const router = useRouter();

const go = () => {
  router.push('/');
};

const login = () => {
  console.log('login')

  isAuthenticated.value = true;
}

const logout = () => {
  console.log('logout')

  isAuthenticated.value = false;
}

import { ref } from 'vue'

const imageUrl = ref('')

const takePhoto = async () => {
  const image = await Camera.getPhoto({
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera
  })

  imageUrl.value = image.dataUrl!
}

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>開発者向けページ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>
        <ion-item>
          <ion-button @click="login"> ログイン </ion-button>
          <ion-button @click="logout"> ログアウト </ion-button>
        </ion-item>
        <ion-item>
          <ion-button @click="go"> トップへ(router) </ion-button>
          <ion-button router-link="/"> トップへ(link) </ion-button>
        </ion-item>
        <ion-item>
          <ion-button @click="takePhoto">
            カメラ起動
          </ion-button>

          <img v-if="imageUrl" :src="imageUrl" />
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>