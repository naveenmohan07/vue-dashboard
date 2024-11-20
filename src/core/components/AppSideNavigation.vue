<script setup lang="ts">
import { useRoute } from 'vue-router'
import { NAVIGATION_CONFIGURATION } from '../constants/routes.constants'
import AppSvgIcon from '@/core/components/AppSvgIcon.vue'
const route = useRoute()
</script>

<template>
  <div class="sidebar-wrapper w-fit bg-primary">
    <div class="sidebar px-6 h-full border-r-[1.5px] border-r-[#727171] flex flex-col">
      <div class="sidebar-header py-6">
        <p class="flex justify-center text-[#cdcbcb]">CN</p>
      </div>
      <div class="sidebar-content">
        <div class="route my-4" v-for="navItem in NAVIGATION_CONFIGURATION" :key="navItem.path">
          <RouterLink :to="navItem.path">
            <AppSvgIcon
              :iconPath="navItem.icon"
              class="h-10 w-10 flex items-center justify-center rounded-md"
              :class="{
                'bg-[#4A5568] text-white': route.path === navItem.path,
                'hover:bg-[#4A5568]': route.path !== navItem.path,
              }"
            />
            <!-- <AppIcon
              :icon-name="navItem.icon"
              icon-color="text-[#cdcbcb]"
              class="flex items-center rounded-md p-2"
              :class="{
                'bg-[#4A5568] text-white': route.path === navItem.path,
                'hover:bg-[#4A5568]': route.path !== navItem.path,
              }"
        
        /> -->
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
