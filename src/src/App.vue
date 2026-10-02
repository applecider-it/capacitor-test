<script setup lang="ts">
import AppCommon from "@/services/app/vue/AppCommon.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const transitionName = ref("slide-forward")

router.afterEach((to: any, from: any) => {
  if (to.meta.level < from.meta.level) {
    // 戻る
    transitionName.value = "slide-back"
  } else {
    // 進む
    transitionName.value = "slide-forward"
  }
})

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
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" class="page" />
        </transition>
      </div>
    </router-view>

    <AppCommon />
  </div>
</template>
