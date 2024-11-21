<script setup lang="ts">
import AppIcon from '@/core/components/AppIcon.vue'

const props = defineProps({
  cardHeaderText: {
    type: String,
  },
  cardIcon: {
    type: String,
  },
  cardPrcentage: {
    type: String,
  },
  cardPercentageText: {
    type: String,
  },
})
</script>

<template>
  <div
    class="profile-card-container bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 pl-8 pt-6 pb-6 pr-10 h-full"
  >
    <div class="profile-card-header">
      <p class="text-[#fff] text-sm">{{ cardHeaderText }}</p>
      <div class="profile-card-body pt-6 flex flex-col justify-start">
        <AppIcon icon-name="ArrowUpIcon" class="p-0 h-4 w-4" />
        <p class="text-2xl">{{ cardPrcentage }}</p>
        <p class="text-xs">{{ cardPercentageText }}</p>
      </div>
    </div>
  </div>
</template>
