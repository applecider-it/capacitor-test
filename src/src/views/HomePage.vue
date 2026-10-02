<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="space-y-10 text-center">
      <div>
        <router-link to="/todo" class="app-btn-primary">Todo</router-link>
      </div>
      <div>
        <router-link to="/auth" class="app-btn-primary">Auth</router-link>
      </div>
      <div>
        <router-link to="/camera" class="app-btn-primary">Camera</router-link>
      </div>
      <div class="py-5">
        <router-link to="/development" class="app-btn-primary">development</router-link>
      </div>
    </div>
  </div>
</template>
