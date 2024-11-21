<script setup lang="ts">
import { computed, defineProps, onMounted } from 'vue'
import type { Influencer } from '@/core/models/influencer.model'
import ProfieProgressCard from '../shared/ProgressCard.vue'
import RadarChart from '@/views/profile/shared/RadarChart.vue'
import { GENDER } from '@/core/constants/app.constants'
import AppSvgIcon from '@/core/components/AppSvgIcon.vue'
import { formatShortScale, formatPercentage } from '@/core/utils/app.util'
import { useProfile } from '@/core/composables/profile.composable'
import AppLoader from '@/core/components/AppLoader.vue'
import AppError from '@/core/components/AppError.vue'

const { influencer: influencer, error, isLoading, fetchProfile } = useProfile()

onMounted(async () => {
  await fetchProfile()
  console.log('Influencer value ==> ', influencer.value)
})

const getStyleForDirection = (direction: string) => {
  return {
    colorClass:
      {
        positive: 'text-green',
        neutral: 'text-orange',
        negative: 'text-red',
      }[direction] || 'text-gray',

    iconClass:
      {
        positive: 'icon-check',
        neutral: 'icon-minus',
        negative: 'icon-exclamation',
      }[direction] || 'icon-info',
  }
}

const formattedEngagemetFollowers = computed(() =>
  formatPercentage(influencer.value.profile_active_followers.value),
)

const formattedActiveFollowers = computed(() =>
  formatPercentage(influencer.value.profile_active_followers.value),
)

const formattedEmv = computed(() => formatShortScale(influencer.value.profile_followers.value))
const radarQualityScoreConfig = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      animate: true,
      angleLines: {
        display: false,
      },
      grid: {
        circular: true,
        color: '#ffffff15',
      },
      pointLabels: {
        font: { size: 0 },
        backdropColor: '#8c96ff',
        backdropPadding: 3,
        borderRadius: 3,
      },
      ticks: {
        stepSize: 25,
        display: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 2,
      borderJoinStyle: 'round',
    },
  },
}

const radarQualityScoreData = {
  labels: ['Speed', 'Strength', 'Stamina', 'Agility', 'Intelligence'],
  datasets: [
    {
      label: 'Player A',
      data: [65, 59, 90, 81, 56],
      fill: true,
      backgroundColor: '#FFFFFF40',
      borderColor: '#FFFFFF',
      borderWidth: 0,
      pointBackgroundColor: 'green',
      pointRadius: 0,
      pointStyle: 'circle',
      tension: 0.2,
    },
  ],
}
</script>

<template>
  <div class="influencer-loading w-full flex items-center justify-center" v-if="isLoading">
    <AppLoader />
  </div>
  <div class="influencer-loading w-full flex items-center justify-center" v-if="error">
    <AppError error-message="Something went wrong!!" class="text-[#fff] text-opacity-50" />
  </div>
  <div class="influencer-detail-card flex h-full gap-4" v-if="influencer">
    <div class="influencer-image flex-none">
      <img
        :src="influencer.profile_display_picture"
        alt="user-image"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="influencer-detail-card-content-left flex flex-col gap-4 flex-grow">
      <div class="influencer-info-card bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-6">
        <div class="influencer-info-card-header flex justify-between bg-opacity-5">
          <div class="influencer-name">
            <div class="influencer-badge flex items-center">
              <p class="text-[#fff] text-xl font-normal">{{ influencer.profile_name }}</p>
              <AppSvgIcon iconPath="verified" class="px-2" />
            </div>
            <p class="text-[#fff] text-opacity-50 text-sm">{{ influencer.profile_username }}</p>
          </div>
          <div class="influencer-followers-count">
            <p class="flex items-center text-xl text-[#fff]">
              <AppSvgIcon iconPath="arrow-up" class="text-green px-2 w-[34px]" />
              {{ formatShortScale(influencer.profile_followers.value) }}
            </p>
            <p class="text-[#fff] text-opacity-50 text-sm float-end">Followers</p>
          </div>
        </div>
        <div class="border-b-2 border-[#FFFFFF0A] my-4"></div>
        <div class="user-detail-card-body flex justify-between">
          <div class="user-detail-card-body-left">
            <div class="flex items-center text-sm text-[#FFFFFF] gap-2">
              <AppSvgIcon iconPath="flag" class="text-[#FFFFFF] opacity-50" />
              <p v-capitalize class="text-[#FFFFFF] opacity-80">{{ influencer.profile_type }}</p>
            </div>
            <div class="flex items-center text-sm text-[#FFFFFF] gap-2 my-4">
              <AppSvgIcon iconPath="category" class="text-[#FFFFFF] opacity-50" />
              <span v-for="(theme, index) in influencer.profile_theme" :key="index">
                <p v-capitalize class="text-[#FFFFFF] opacity-80">
                  {{ theme }}<span v-if="index < influencer.profile_theme.length - 1">,</span>
                </p>
              </span>
            </div>
            <div class="flex items-center text-sm text-[#fff] gap-2">
              <AppSvgIcon iconPath="tag" class="text-[#FFFFFF] opacity-50" />
              <span v-for="(theme, index) in influencer.profile_keyword" :key="index">
                <p v-capitalize class="text-[#FFFFFF] opacity-80">
                  {{ theme }}<span v-if="index < influencer.profile_keyword.length - 1">,</span>
                </p>
              </span>
            </div>
          </div>
          <div class="user-detail-card-body-right">
            <div class="flex items-center text-sm text-[#fff] gap-2">
              <AppSvgIcon iconPath="location" class="text-[#FFFFFF] opacity-50" />
              <p v-capitalize class="text-[#FFFFFF] opacity-80">
                {{ influencer.profile_country.name }}
              </p>
            </div>
            <div class="flex items-center text-sm text-[#fff] gap-2 my-4">
              <AppSvgIcon iconPath="user" class="text-[#FFFFFF] opacity-50" />
              <p v-capitalize class="text-[#FFFFFF] opacity-80">
                {{ GENDER[influencer.profile_gender] }}
              </p>
            </div>
          </div>
        </div>
        <div class="user-detail-card-footer pt-8 flex justify-between items-center">
          <div class="user-detail-card-footer-left flex gap-4">
            <AppSvgIcon
              iconPath="instagram"
              class="opacity-60 border-1 border-[#FFFFFF0A] rounded-md h-8 w-8 p-2 shadow-sm shadow-[#fff4] flex items-center justify-center"
            />
            <AppSvgIcon
              iconPath="you-tube"
              class="opacity-60 border-1 border-[#FFFFFF0A] rounded-md h-8 w-8 p-2 shadow-sm shadow-[#fff4] flex items-center justify-center"
            />

            <AppSvgIcon
              iconPath="email"
              class="opacity-60 border-1 border-[#FFFFFF0A] rounded-md h-8 w-8 p-2 shadow-sm shadow-[#fff4] flex items-center justify-center"
            />
          </div>
          <div class="user-detail-card-footer-right">
            <p class="text-[#fff] text-opacity-50 text-sm float-end">Added on Sep 5, 2018</p>
          </div>
        </div>
      </div>
      <div
        class="influencer-score-card bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-6"
      >
        <div class="influencer-score-card-header">
          <p class="text-[#fff] text-xs" v-capitalize>QUALITY SCORE</p>
        </div>
        <div class="influencer-score-card-body flex justify-between items-center gap-x-0">
          <div class="influencer-score">
            <AppSvgIcon iconPath="arrow-up" class="p-0 h-4 w-4 text-orange" />
            <div class="score-text flex items-baseline">
              <p class="text-6xl text-orange">54</p>
              <p class="text-xs text-orange pl-1">/ 100</p>
            </div>
            <p class="text-xs text-orange">Average</p>
          </div>

          <div class="influencer-score-chart h-56 w-56 pl-4 pt-4 pb-4">
            <RadarChart :data="radarQualityScoreData" :config="radarQualityScoreConfig" />
          </div>
        </div>
      </div>
    </div>

    <!-- Column 3: Detail Card Content Right -->
    <div class="influencer-detail-card-content-right flex flex-col gap-4 flex-grow">
      <ProfieProgressCard
        cardHeaderText="ENGAGEMENT RATE"
        cardPercentageText="Excellent"
        :cardPrcentage="formattedEngagemetFollowers"
        :class="getStyleForDirection(influencer.profile_engagement_rate.direction).colorClass"
      />
      <ProfieProgressCard
        cardHeaderText="ACTIVE FOLLOWERS"
        cardPercentageText="Average"
        :cardPrcentage="formattedActiveFollowers"
        :class="getStyleForDirection(influencer.profile_active_followers.direction).colorClass"
      />
      <ProfieProgressCard
        cardHeaderText="EMV"
        cardPercentageText="Bad"
        :cardPrcentage="formattedEmv"
        :class="getStyleForDirection(influencer.profile_media_value.direction).colorClass"
      />
    </div>
  </div>
</template>

<style scoped>
.influencer-detail-card {
  display: flex;
  height: 100%;
  gap: 1rem;
}

.influencer-image {
  flex: 0 0 auto;
  height: 620px;
  width: 520px;
}

.influencer-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.influencer-detail-card-content-left {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.influencer-detail-card-content-right {
  flex: 0 0 17%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.influencer-info-card,
.influencer-score-card,
.ProfieProgressCard {
  flex: 1;
}
</style>
