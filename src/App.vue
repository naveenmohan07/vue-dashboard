<script setup lang="ts">
import AppSideNavigation from './core/components/AppSideNavigation.vue'
import AppNavigationBar from './core/components/AppNavigationBar.vue'
</script>

<template>
  <div class="app-wrapper bg-primary flex h-screen">
    <AppSideNavigation />
    <div class="app-content h-full overflow-scroll">
      <div class="app-content-header">
        <AppNavigationBar />
      </div>
      <div class="app-content-body px-16 py-6 bg-primary">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
