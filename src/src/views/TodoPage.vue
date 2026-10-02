<script setup lang="ts">
import { useRouter } from 'vue-router';

import { ref } from 'vue';

import AppLayout from '@/components/layouts/AppLayout.vue'

const router = useRouter();

const text = ref<string>('');
const todos = ref<string[]>([]);

/** TOD追加 */
const addTodo = () => {
  if (!text.value) return;
  todos.value.push(text.value);
  text.value = '';
};

/** TOD削除 */
const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};
</script>

<template>
  <AppLayout name="Todo">
    <div class="space-y-5">
      <div position="stacked">Todoコメント</div>
      <input type="text" v-model="text" placeholder="入力" class="app-form-input"></input>

      <button class="app-btn-primary" @click="addTodo">
        追加
      </button>
    </div>

    <ul class="my-10">
      <li v-for="(todo, index) in todos" :key="index" class="flex items-center justify-between p-4 border-b">
        <div class="p-3 bg-gray-50">
          {{ todo }}
        </div>
        <button class="app-btn-primary" @click="removeTodo(index)">
          削除
        </button>
      </li>
    </ul>
  </AppLayout>
</template>
