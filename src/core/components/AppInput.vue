<script setup lang="ts">
import AppIcon from '@/core/components/AppIcon.vue' // Import AppIcon locally
</script>

<template>
  <div class="app-input-wrapper">
    <div class="app-input flex items-center">
      <AppIcon
        icon-name="MagnifyingGlassIcon"
        class="bg-[#FFFFFF] bg-opacity-5 border-0 h-10 text-[#FFFFFF] text-opacity-40 rounded-l-md"
      />
      <input
        type="text"
        placeholder="Search"
        class="bg-[#FFFFFF] border-0 bg-opacity-5 rounded-r-md"
      />
    </div>
  </div>
</template>

<style scoped>
.app-input-wrapper {
  width: 100%;
}

.app-input {
  display: flex;
  align-items: center;
  width: 100%;
}

input {
  border: none;
  outline: none;

  flex-grow: 1;
}
</style>
