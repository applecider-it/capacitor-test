<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Todoアプリ</ion-title>
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
          追加！！
        </ion-button>

        <ion-list>
          <ion-item v-for="(todo, index) in todos" :key="index">
            {{ todo }}
            <ion-button slot="end" color="danger" @click="removeTodo(index)">
              削除
            </ion-button>
          </ion-item>
        </ion-list>

        <div style="margin-top: 2rem">遷移テスト</div>

        <div>
          <ion-button @click="go"> 次へ </ion-button>
          <ion-button router-link="/second"> 次へ </ion-button>
        </div>
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
} from '@ionic/vue';

const router = useRouter();

const go = () => {
  router.push('/second');

  setTimeout(() => {
    (document.activeElement as HTMLElement)?.blur();
  }, 0);
};

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
