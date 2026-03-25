<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>次のページ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-button router-link="/">
        戻る
      </ion-button>
    </ion-content>
  </ion-page>
</template>


<script setup>
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
} from '@ionic/vue';
</script>