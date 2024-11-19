<script setup lang="ts">
import AppLoader from '@/core/components/AppLoader.vue'
import { useProfile } from '@/core/composables/profile.composable'
import AppIcon from '@/core/components/AppIcon.vue'
import { onMounted } from 'vue'
import ProfieProgressCard from './components/ProfieProgressCard.vue'
import ProfileContentCard from './components/ProfileContentCard.vue'
import ProfileAudienceCard from './components/ProfileAudienceCard.vue'
import AppInput from '@/core/components/AppInput.vue'
import AppChips from '@/core/components/AppChips.vue'
import LineChart from './components/LineChart.vue'
import AppDoughnutChart from './components/AppDoughnutChart.vue'
import AppChart from '@/core/components/AppChart.vue'
import { ref } from 'vue'

const { user, error, isLoading, fetchProfile } = useProfile()

onMounted(() => {
  //   fetchProfile()
})

const lineChartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4,
    },
  ],
})
const lineChartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
})

const doughnutChartData = ref({
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ['green', 'red'],
      borderWidth: 0,
      cutout: '88%',
      spacing: 1,
      borderRadius: 10,
    },
  ],
})

const doughnutChartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
})
</script>

<template>
  <div v-if="isLoading">
    <AppLoader />
  </div>
  <div class="profile-wrapper">
    <div class="influencer-detail-card flex h-full">
      <div class="influencer-image h-96 w-96">
        <img
          src="https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpg"
          alt="user-image"
        />
      </div>
      <div class="influencer-detail-card-content flex h-full gap-2">
        <div class="influencer-detaol-card-content-left flex flex-col gap-2 h-full">
          <div
            class="influencer-info-card bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 h-full w-96 mx-1 p-6"
          >
            <div class="influencer-info-card-header flex justify-between bg-opacity-5">
              <div class="influencer-name">
                <div class="influencer-badge flex items-center">
                  <p class="text-[#fff] text-xl font-normal">LISA</p>
                  <AppIcon icon-name="CheckBadgeIcon" icon-color="text-[#cdcbcb]" />
                </div>
                <p class="text-[#fff] text-opacity-50 text-sm">@lalalalisa_m</p>
              </div>
              <div class="influencer-followers-count">
                <p class="flex items-center text-xl text-[#fff]">
                  <AppIcon icon-name="ArrowUpIcon" icon-color="text-green" />104.4M
                </p>
                <p class="text-[#fff] text-opacity-50 text-sm float-end">Followers</p>
              </div>
            </div>
            <div class="border-b-2 border-[#FFFFFF0A] my-4"></div>
            <div class="user-detail-card-body flex justify-between">
              <div class="user-detail-card-body-left">
                <p class="flex items-center text-sm text-[#FFFFFF]">
                  <AppIcon icon-name="FlagIcon" icon-color="text-[#FFFFFF]" class="opacity-50" />
                  Influencer
                </p>
                <p class="flex items-center text-sm text-[#FFFFFF]">
                  <AppIcon icon-name="FlagIcon" icon-color="text-[#FFFFFF]" class="opacity-50" />
                  Beauty, Fashion, Lifestyle
                </p>
                <p class="flex items-center text-sm text-[#fff]">
                  <AppIcon icon-name="FlagIcon" icon-color="text-[#fff]" class="opacity-50" /> Dior,
                  Celine, Fashion
                </p>
              </div>
              <div class="user-detail-card-body-right">
                <p class="flex items-center text-sm text-[#fff]">
                  <AppIcon icon-name="FlagIcon" icon-color="text-[#fff]" class="opacity-50" />
                  Thailand
                </p>
                <p class="flex items-center text-sm text-[#fff]">
                  <AppIcon icon-name="FlagIcon" icon-color="text-[#fff]" class="opacity-50" />
                  Female
                </p>
              </div>
            </div>
            <div class="user-detail-card-footer pt-4 flex justify-between">
              <div class="user-detail-card-footer-left flex gap-4">
                <AppIcon
                  icon-name="FlagIcon"
                  icon-color="text-[#fff]"
                  class="border-2 border-[#FFFFFF0A] rounded-md h-8 w-8 p-2 shadow-sm shadow-offWhite"
                />
                <AppIcon
                  icon-name="FlagIcon"
                  icon-color="text-[#fff]"
                  class="border-2 border-[#FFFFFF0A] rounded-md h-8 w-8 p-2 shadow-sm shadow-offWhite"
                />
                <AppIcon
                  icon-name="FlagIcon"
                  icon-color="text-[#fff]"
                  class="border-2 border-[#FFFFFF0A] rounded-md h-8 w-8 p-2 shadow-sm shadow-offWhite"
                />
              </div>
              <div class="user-detail-card-footer-right">
                <p class="text-[#fff] text-opacity-50 text-sm float-end">Added on Sep 5, 2018</p>
              </div>
            </div>
          </div>
          <div
            class="influencer-score-card bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 h-full w-96 mx-1 p-6"
          >
            <div class="influencer-score-card-header">
              <p class="text-[#fff] text-xs">QUALITY SCORE</p>
            </div>
            <div class="influencer-score-card-body flex justify-between">
              <div class="influencer-score">
                <AppIcon icon-name="ArrowUpIcon" class="p-0 h-4 w-4 text-orange" />
                <div class="score-text flex items-baseline">
                  <p class="text-4xl text-orange">54</p>
                  <p class="text-xs text-orange pl-1">/ 100</p>
                </div>
                <p class="text-xs text-orange">Average</p>
              </div>

              <div class="influencer-score-chart">
                <p>chart</p>
              </div>
            </div>
          </div>
        </div>
        <div class="influencer-detail-card-content-right h-full flex flex-col gap-2">
          <ProfieProgressCard
            cardHeaderText="ENGAGEMENT RATE"
            cardPercentageText="Excellent"
            cardPrcentage="6.72%"
            class="text-green"
          />
          <ProfieProgressCard
            cardHeaderText="ACTIVE FOLLOWERS"
            cardPercentageText="Average"
            cardPrcentage="77.75%"
            class="text-orange"
          />
          <ProfieProgressCard
            cardHeaderText="EMV"
            cardPercentageText="Bad"
            cardPrcentage="5.2ME"
            class="text-red"
          />
        </div>
      </div>
    </div>

    <div class="influencer-content-container">
      <ProfileAudienceCard cardHeaderText="CONTENT">
        <div class="influencer-content-body">
          <ProfileContentCard />
        </div>
        <div class="influencer-content-footer flex justify-center pt-6">
          <button
            class="text-[#fff] text-xs border-2 border-[#FFFFFF0A] rounded-md shadow-inner shadow-xs px-5 py-2 shadow-offWhite"
          >
            LOAD MORE
          </button>
        </div>
      </ProfileAudienceCard>
    </div>

    <div class="influencer-audience-card-wrapper">
      <ProfileAudienceCard cardHeaderText="AUDIENCE DEMOGRAPHICS">
        <div class="innfluencer-audience-card-body flex justify-between">
          <div class="influencer-audience-card-body-left">
            <div
              class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4"
            >
              <div class="influencer-content-header flex justify-between items-center">
                <p class="text-[#fff] text-xs">GENDER</p>
              </div>
              <div class="influencer-content-body px-32">
                <AppChart
                  chartType="doughnut"
                  class="w-36 h-32"
                  :chartData="doughnutChartData"
                  :chartOptions="doughnutChartOptions"
                />
              </div>
              <div class="influencer-content-footer flex justify-between">
                <div class="influencer-chart-legend flex items-center gap-2">
                  <div class="influencer-chart-legend-indicator h-2 w-2 rounded-lg bg-purpil"></div>
                  <p class="text-[#fff] text-opacity-50 text-xs">Male: 24.58%</p>
                </div>
                <div class="influencer-chart-legend flex items-center gap-2">
                  <div class="influencer-chart-legend-indicator h-2 w-2 rounded-lg bg-green"></div>
                  <p class="text-[#fff] text-opacity-50 text-xs">Female: 75.42%</p>
                </div>
              </div>
            </div>
            <div
              class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4"
            >
              <div class="influencer-content-header flex justify-between items-center">
                <p class="text-[#fff] text-xs">GENDER</p>
              </div>
              <div class="influencer-content-body px-32 relative">
                <p class="absolute inset-0 flex items-center justify-center text-[#fff] text-sm">
                  Dough
                </p>
                <AppChart
                  chartType="doughnut"
                  class="w-36 h-32"
                  :chartData="doughnutChartData"
                  :chartOptions="doughnutChartOptions"
                />
              </div>
            </div>
          </div>
          <div class="influencer-audience-card-body-right">
            <div
              class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4"
            >
              <div class="influencer-content-header flex justify-between items-center">
                <p class="text-[#fff] text-xs">GENDER</p>
              </div>
              <div class="influencer-content-body px-32">
                <AppChart
                  chartType="doughnut"
                  class="w-36 h-32"
                  :chartData="doughnutChartData"
                  :chartOptions="doughnutChartOptions"
                />
              </div>
            </div>
            <div
              class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4"
            >
              <div class="influencer-content-header flex justify-between items-center">
                <p class="text-[#fff] text-xs">GENDER</p>
              </div>
              <div class="influencer-content-body px-32">
                <AppChart
                  chartType="doughnut"
                  class="w-36 h-32"
                  :chartData="doughnutChartData"
                  :chartOptions="doughnutChartOptions"
                />
              </div>
            </div>
          </div>
        </div>
      </ProfileAudienceCard>
    </div>

    <div class="influencer-content-scanner-card-wrapper border-t-2 border-[#FFFFFF05] py-6 mt-6">
      <div class="influencer-content-scanner-header flex justify-between items-center">
        <p class="text-[#fff] text-xs">CONTENT SCANNER</p>
      </div>
      <div class="influencer-content-scanner-card px-40 pt-20">
        <AppInput />
        <div class="influencer-content-scanner-card-body flex items-center pt-2">
          <p class="text-xs text-[#fff] text-opacity-15">Popular searches:</p>
          <AppChips chipText="Fashion" />
          <AppChips chipText="Beauty" />
          <AppChips chipText="Luxury" />
          <AppChips chipText="Travel" />
        </div>
      </div>
    </div>

    <div
      class="influencer-performance-timeline-card-wrapper border-t-2 border-[#FFFFFF05] py-6 mt-6"
    >
      <div class="influencer-performance-timeline-header flex justify-between items-center">
        <p class="text-[#fff] text-xs">PERFORMANCE TIMELINE</p>
      </div>
      <div class="performance-timeline-card-body">
        <AppChart chartType="line" :chartData="lineChartData" :chartOptions="lineChartOptions" />
      </div>
    </div>
  </div>
</template>
