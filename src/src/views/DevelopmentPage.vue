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

    <ion-content>
      <div style="margin-top: 2rem">遷移テスト</div>

      <div>
        <ion-button @click="go"> トップへ(router) </ion-button>
        <ion-button router-link="/"> トップへ(link) </ion-button>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
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


const router = useRouter();

const go = () => {
  router.push('/');
};

</script>