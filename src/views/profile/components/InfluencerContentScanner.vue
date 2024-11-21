<script setup lang="ts">
import { ref } from 'vue'
import AppInput from '@/core/components/AppInput.vue'
import AppChips from '@/core/components/AppChips.vue'

const scannerChips = ref(['Fashion', 'Beauty', 'Luxury', 'Travel'])
</script>

<template>
  <div class="influencer-content-scanner-card-wrapper border-t-2 border-[#FFFFFF05] py-6 mt-6">
    <div class="influencer-content-scanner-header flex justify-between items-center">
      <p class="text-[#fff] text-xs">CONTENT SCANNER</p>
    </div>
    <div class="influencer-content-scanner-card px-40 pt-20">
      <AppInput />
      <div class="influencer-content-scanner-card-body flex items-center pt-2 gap-2">
        <p class="text-xs text-[#fff] text-opacity-15">Popular searches:</p>
        <div v-for="chip in scannerChips" :key="chip">
          <AppChips :chipText="chip" />
        </div>
      </div>
    </div>
  </div>
</template>
