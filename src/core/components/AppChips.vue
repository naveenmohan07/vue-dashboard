<template>
  <div class="app-chips-wrapper">
    <div class="app-chip bg-[#FFFFFF05] h-full w-fit p-1 flex gap-2 pl-2">
      <p class="text-[#fff] text-xs text-opacity-70">{{ chipText }}</p>
      <AppIcon
        icon-name="ExclamationCircleIcon"
        class="p-0 h-4 w-4 text-[#FFFFFF] text-opacity-70"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '@/core/components/AppIcon.vue'
const props = defineProps({
  chipText: {
    type: String,
  },
})
</script>
