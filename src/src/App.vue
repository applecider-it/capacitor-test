<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonToast } from '@ionic/vue';

import { toastMessage } from '@/services/ui/toast'

</script>

<template>
  <ion-app>
    <ion-router-outlet />
    <ion-toast :is-open="!!toastMessage" :message="toastMessage" duration="2000" @didDismiss="toastMessage = ''">
    </ion-toast>
  </ion-app>
</template>
