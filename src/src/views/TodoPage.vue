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
  IonLabel,
  IonButtons,
  IonBackButton,
} from '@ionic/vue';

import { ref } from 'vue';

const text = ref<string>('');
const todos = ref<string[]>([]);

const addTodo = () => {
  if (!text.value) return;
  todos.value.push(text.value);
  text.value = '';
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Todo</ion-title>
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
          <ion-label position="stacked">Todoコメント</ion-label>
          <ion-input v-model="text" placeholder="入力"></ion-input>
        </ion-item>

        <ion-button expand="block" shape="round" @click="addTodo">
          追加
        </ion-button>

        <ion-list>
          <ion-item v-for="(todo, index) in todos" :key="index">
            {{ todo }}
            <ion-button slot="end" color="danger" @click="removeTodo(index)">
              削除
            </ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>
