<template>
  <div class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4 my-8">
    <div class="influencer-content-header flex justify-between items-center pb-5">
      <p class="text-[#fff] text-sm">{{ cardHeaderText }}</p>
      <div
        v-show="cardHeaderText === 'CONTENT'"
        class="influencer-content-header-navigation flex justify-center flex-grow gap-4"
      >
        <p
          v-for="item in ['date', 'reach', 'impression', 'engagement', 'interactions', 'emv']"
          :key="item"
          class="text-[#fff] text-xs"
        >
          {{ item.toUpperCase() }}
        </p>
      </div>
    </div>

    <div class="influencer-content-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  cardHeaderText: {
    type: String,
  },
})
</script>
