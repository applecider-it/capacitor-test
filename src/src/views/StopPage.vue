<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const type = route.query.type;

console.log({ type });
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="p-10">
      <template v-if="type === 'needUpdate'">
        <div>アプリの更新のため、アプリの再起動が必要です。</div>
        <div class="mt-5 text-left">
          更新手順<br />
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
          ◯◯◯◯◯◯◯◯
        </div>
      </template>
    </div>
  </div>
</template>