<script setup lang="ts">
import { useRouter } from 'vue-router';

type Props = {
  name: string;
}

defineProps<Props>();

const router = useRouter();

const back = () => {
  router.back();
}
</script>

<template>
  <div class="mt-[env(safe-area-inset-top)] mb-[env(safe-area-inset-bottom)] 
    h-[calc(100dvh-env(safe-area-inset-top)-env(safe-area-inset-bottom))] overflow-y-auto">

    <div class="p-5 bg-gray-50">
      <div class="flex items-center justify-between">
        <span class="w-[70px]">
          <span @click="back" class="app-btn-secondary">←</span>
        </span>
        <span class="text-2xl font-bold overflow-hidden">{{ name }}</span>
        <span class="w-[70px]"></span>
      </div>
    </div>

    <div class="p-5">
      <slot />
    </div>

  </div>
</template>