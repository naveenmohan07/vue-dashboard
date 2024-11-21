<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { COUNTRY_CODE } from '@/core/constants/app.constants'
import { formatPercentage } from '@/core/utils/app.util'
import RadarChart from '@/views/profile/shared/RadarChart.vue'
import AppButton from '@/core/components/AppButton.vue'
import { useAudienceDemographics } from '@/core/composables/profile.composable'
import AppLoader from '@/core/components/AppLoader.vue'
import AppChart from '@/core/components/AppChart.vue'

const { audienceDemographics, error, isLoading, fetchAudienceDemographics } =
  useAudienceDemographics()

onMounted(async () => {
  await fetchAudienceDemographics()
  console.log('Audience demographics value ==> ', audienceDemographics.value!.ages)
})

const ageRanges = computed(() => {
  const ages = audienceDemographics.value?.ages
  return ages
    ? Object.fromEntries(Object.entries(ages).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)))
    : {}
})

const ageMax = computed(() => {
  const ages = audienceDemographics.value?.ages
  return ages ? Math.max(...Object.values(ages)) : 0
})

const doughnutChartData = computed(() => {
  return {
    datasets: [
      {
        data: [...Object.values(audienceDemographics.value?.genders || {})],
        backgroundColor: ['#8c96ff', '#64ffaa'],
        borderWidth: 0,
        cutout: '88%',
        spacing: 1,
        rotation: 260,
        borderRadius: 10,
      },
    ],
  }
})

const doughnutChartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
})

const topCountries = computed(() =>
  Object.entries(audienceDemographics.value?.countries || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {}),
)

const radarTopEthnicsData = computed(() => {
  const dataValues =
    audienceDemographics.value?.ethnicities.map((ethnicity) =>
      parseFloat(formatPercentage(ethnicity.weight).split('%')[0]),
    ) || []

  const maxValue = Math.max(...dataValues)

  const pointBackgroundColor = dataValues.map((value) =>
    value === maxValue ? '#8c96ff' : '#64ffaa',
  )

  return {
    labels: audienceDemographics.value?.ethnicities.map((ethnicity) => ethnicity.name),
    datasets: [
      {
        data: dataValues,
        fill: false,
        backgroundColor: '#FFFFFF40',
        borderColor: '#FFFFFF',
        borderWidth: 0,
        pointBackgroundColor,
        pointRadius: 4,
        pointStyle: 'circle',
        tension: 0.2,
      },
    ],
  }
})

const radarTopEthnicsConfig = {
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
        display: true,
        color: '#FFFFFF40',
      },
      grid: {
        circular: true,
        color: '#ffffff15',
      },
      pointLabels: {
        font: { size: 10 },
        color: '#FFFFFF99',
        pointColor: '#FFFFFF',
        backdropPadding: 10,
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
</script>

<template>
  <div class="audience-card-loading" v-if="isLoading">
    <AppLoader />
  </div>

  <div
    class="influencer-audience-card flex flex-col w-full items-center"
    v-if="audienceDemographics"
  >
    <div class="influencer-audience-card-body w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="influencer-audience-card-body-left flex flex-col gap-6">
        <div
          class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4 h-72 flex flex-col justify-around px-4"
        >
          <div class="influencer-content-header flex justify-between items-center">
            <p class="text-[#fff] text-xs">GENDER</p>
          </div>
          <div class="influencer-content-body px-32 relative flex flex-col items-center">
            <div
              class="absolute inset-0 flex flex-col items-center justify-center text-[#fff] text-sm"
            >
              <p class="text-green text-lg">75.42%</p>
              <p class="text-[#fff] text-xs opacity-40">Female</p>
            </div>
            <AppChart
              chartType="doughnut"
              class="w-36 h-36 mt-4"
              :chartData="doughnutChartData"
              :chartOptions="doughnutChartOptions"
            />
          </div>
          <div class="influencer-content-footer flex justify-between pt-6">
            <div class="influencer-chart-legend flex items-center gap-2">
              <div class="influencer-chart-legend-indicator h-2 w-2 rounded-lg bg-purpil"></div>
              <p class="text-[#fff] text-opacity-50 text-xs">
                Male: {{ formatPercentage(audienceDemographics?.genders.MALE ?? 0) }}
              </p>
            </div>
            <div class="influencer-chart-legend flex items-center gap-2">
              <div class="influencer-chart-legend-indicator h-2 w-2 rounded-lg bg-green"></div>
              <p class="text-[#fff] text-opacity-50 text-xs">
                Female: {{ formatPercentage(audienceDemographics?.genders.FEMALE ?? 0) }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4 h-72 flex flex-col justify-around px-4"
        >
          <div class="influencer-content-header flex justify-between items-center">
            <p class="text-[#fff] text-xs">TOP CONTRIES</p>
            <p class="text-[#fff] text-xs opacity-50">18.22% from Indonesia</p>
          </div>
          <div
            class="influencer-content-body"
            v-for="(percentage, countryCode) in topCountries"
            :key="countryCode"
          >
            <div class="countries-chart">
              <div class="countries-chart-legend flex justify-between py-2">
                <p class="text-[#fff] text-xs opacity-40">{{ COUNTRY_CODE[countryCode] }}</p>
                <p class="text-[#fff] text-xs opacity-40">18.8M</p>
              </div>

              <div
                class="progress-bar bg-primary border-1 h-2 border border-primary rounded-md w-full"
              >
                <div
                  class="progress-bar-indicator h-1 rounded-md flex justify-center items-center"
                  :style="{
                    background: percentage > 0.142035 ? '#64ffaa' : '#8c96ff',
                    width: formatPercentage(percentage),
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="influencer-audience-card-body-right flex flex-col gap-6">
        <div class="influencer-audience-card-body-right flex flex-col gap-6">
          <div
            class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4 h-72 flex flex-col justify-around px-4"
          >
            <div class="influencer-content-header flex justify-between items-center">
              <p class="text-[#fff] text-xs">AGE RANGE</p>
              <p class="text-[#fff] text-xs opacity-50">Show by Gender</p>
            </div>
            <div
              class="age-chart-container flex flex-row justify-evenly py-4 px-20 items-end h-full"
            >
              <div
                class="age-chart flex flex-col items-center h-full"
                v-for="(value, key, index) in ageRanges"
                :key="index"
              >
                <div
                  class="age-chart-bar h-full bg-primary border-2 border-[#FFFFFF0D] w-3 flex justify-center relative overflow-hidden rounded-md"
                >
                  <div
                    class="age-chart-bar-indicator absolute bottom-0 w-1 rounded-md"
                    :style="{
                      background: value === ageMax ? '#64ffaa' : '#8c96ff',
                      height: formatPercentage(value),
                    }"
                  ></div>
                </div>
                <p class="text-[#fff] text-xs opacity-50 pt-2">{{ key }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="influencer-content bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-4 h-72 flex flex-col justify-around px-4"
        >
          <div class="influencer-content-header flex justify-between items-center">
            <p class="text-[#fff] text-xs">TOP ETHNICITIES</p>
            <p class="text-[#fff] text-xs opacity-50">75% Asian</p>
          </div>
          <div class="influencer-content-body h-60 w-60 contents m-4 py-4">
            <RadarChart :data="radarTopEthnicsData" :config="radarTopEthnicsConfig" />
          </div>
        </div>
      </div>
    </div>
    <div class="influencer-audience-card-footer pt-6">
      <AppButton />
    </div>
  </div>
</template>
