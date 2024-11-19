<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const routeHistory = computed(() => {
  return router.currentRoute.value.matched
})
</script>

<template>
  <p class="route" v-for="rH in routeHistory" :key="rH.path">
    <RouterLink :to="rH.path" class="text-[#cdcbcb]">{{
      rH.name?.toString().toUpperCase()
    }}</RouterLink>
  </p>
</template>
