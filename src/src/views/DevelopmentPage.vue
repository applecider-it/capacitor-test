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
    <ul>
      <li v-for="n in 50" :key="n">
        番号: {{ n }}
      </li>
    </ul>
  </AppLayout>
</template>