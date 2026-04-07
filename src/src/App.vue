<script setup lang="ts">
import AppCommon from "@/services/app/vue/AppCommon.vue"

// 動作確認
import { showToast, setIsLoading } from "@/services/ui/message";

/*
setTimeout(() => {
    showToast("Test");
    setIsLoading(true);
}, 1000);
 */

</script>

<template>
  <div>
    <router-view v-slot="{ Component }">
      <div class="relative w-full h-full overflow-hidden">
        <transition name="slide" mode="out-in">
          <component :is="Component" class="page" />
        </transition>
      </div>
    </router-view>

    <AppCommon />
  </div>
</template>
