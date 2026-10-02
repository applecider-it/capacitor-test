<script setup lang="ts">
import { ref, onMounted } from 'vue'

import AppLayout from '@/components/layouts/AppLayout.vue'

onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <AppLayout name="開発者向けページ">
    <div>
      <div>アセット動作確認</div>
      <img src="../assets/images/Block.png" class="w-[50px]" />
    </div>

    <div class="mt-5">
      <div>スクロール動作確認用</div>
      <ul class="bg-blue-50">
        <li v-for="n in 50" :key="n">
          {{ n }}
        </li>
      </ul>
    </div>
  </AppLayout>
</template>