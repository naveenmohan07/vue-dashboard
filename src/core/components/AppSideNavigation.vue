<script setup lang="ts">
import { useRoute } from 'vue-router'
import { NAVIGATION_CONFIGURATION } from '../constants/routes.constants'
import AppSvgIcon from '@/core/components/AppSvgIcon.vue'
const route = useRoute()
</script>

<template>
  <div class="sidebar-wrapper w-fit bg-primary">
    <div class="sidebar px-4 h-full border-r-[1.5px] border-r-[#727171] flex flex-col">
      <div class="sidebar-header py-6">
        <AppSvgIcon iconPath="logo" />
      </div>
      <div class="sidebar-content">
        <div class="route my-4" v-for="navItem in NAVIGATION_CONFIGURATION" :key="navItem.path">
          <RouterLink :to="navItem.path">
            <AppSvgIcon
              :iconPath="navItem.icon"
              class="h-10 w-10 flex items-center justify-center rounded-md opacity-60"
              :class="{
                'bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 shadow-sm shadow-[#ffffff57] opacity-100':
                  route.path === navItem.path,
                'hover:bg-[#FFFFFF05]': route.path !== navItem.path,
              }"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
