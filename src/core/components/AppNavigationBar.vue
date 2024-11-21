<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import store from '@/core/store/app.store'
import { CURRENCY } from '../constants/app.constants'
import AppDropdown from './AppDropdown.vue'
const router = useRouter()

const routeHistory = computed(() => {
  return router.currentRoute.value.matched
})

const updateState = (value: string) => {
  console.log('Updating currency...', value)
  store.dispatch('setCurrency', value)
}
</script>

<template>
  <div class="flex items-center justify-between w-full border-b-2 border-[#FFFFFF0A]">
    <p class="route p-4" v-for="rH in routeHistory" :key="rH.path">
      <RouterLink :to="rH.path" class="text-[#cdcbcb]">{{
        rH.name?.toString().toUpperCase()
      }}</RouterLink>
    </p>
    <AppDropdown
      :options="Object.entries(CURRENCY).map(([key, value]) => value.toUpperCase())"
      @selected="updateState"
    />
  </div>
</template>
