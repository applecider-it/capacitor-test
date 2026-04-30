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
  </AppLayout>
</template>