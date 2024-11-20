<script setup lang="ts">
import AppLoader from '@/core/components/AppLoader.vue'
import { useProfile } from '@/core/composables/profile.composable'
import AppIcon from '@/core/components/AppIcon.vue'
import { computed, onMounted } from 'vue'
import ProfieProgressCard from './components/ProfieProgressCard.vue'
import ProfileContentCard from './components/ProfileContentCard.vue'
import ProfileAudienceCard from './components/ProfileAudienceCard.vue'
import AppInput from '@/core/components/AppInput.vue'
import AppChips from '@/core/components/AppChips.vue'
import AppChart from '@/core/components/AppChart.vue'
import { ref } from 'vue'
import { COUNTRY_CODE, GENDER } from '@/core/constants/app.constants'
import { formatShortScale } from '@/core/utils/app.util'
import RadarChart from './components/RadarChart.vue'
import AppButton from '@/core/components/AppButton.vue'

const { user, error, isLoading, fetchProfile } = useProfile()

const influencer = {
  profile_name: 'Lisa Mandolin',
  profile_gender: 'f',
  profile_followers: {
    value: 140043533,
    type: 'numerical_short_scale',
    direction: 'positive',
  },
  profile_display_picture:
    'https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpg',
  profile_verified: 1,
  profile_created_at: 1509301800,
  profile_accounts: {
    instagram: 1,
    youtube: 1,
    email: 1,
  },
  profile_username: 'lalalalisa_m',
  profile_type: 'influencer',
  profile_theme: ['beauty', 'fashion', 'lifestyle'],
  profile_keyword: ['dior', 'chanel', 'louis vitton'],
  profile_country: {
    code: 'TH',
    name: 'thailand',
    continent: 'asia',
  },
  profile_engagement_rate: {
    value: 0.06723,
    type: 'percentage',
    direction: 'positive',
    display_direction_text: true,
  },
  profile_active_followers: {
    value: 0.777456,
    type: 'percentage',
    direction: 'neutral',
    display_direction_text: true,
  },
  profile_quality: {
    score: {
      value: 54,
      direction: 'neutral',
      display_direction_text: true,
    },
    score_metrics: {
      growth: 45,
      interaction: 45,
      impression: 52,
      reach: 48,
      media_value: 47,
    },
  },
  profile_media_value: {
    value: 53437320,
    type: 'currency',
    direction: 'negative',
    display_direction_text: true,
  },
}

const ageChartData = {
  labels: ['Speed', 'Strength', 'Stamina', 'Agility'],
  datasets: [
    {
      label: 'My First Dataset',
      fill: false,
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ['red'],
      borderColor: 'green',
      borderWidth: 8,
      barThickness: 10,
    },
  ],
}
const ageChartConfig = {
  plugins: {
    legend: {
      display: false,
    },
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
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

function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(2)}%`
}

function getStyleForDirection(direction: string) {
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

const formattedActiveFollowers = computed(() =>
  formatPercentage(influencer.profile_active_followers.value),
)

onMounted(async () => {
  // await fetchProfile()
  // console.log('USER ==> ', user.value)
})

const ages = {
  '65-': 0,
  '13-17': 0.118669,
  '18-24': 0.457816,
  '25-34': 0.363945,
  '35-44': 0.051869,
  '45-64': 0.007701,
}

const ethnicities = [
  {
    code: 'asian',
    name: 'Asian',
    weight: 0.678779,
  },
  {
    code: 'white',
    name: 'White / Caucasian',
    weight: 0.22626,
  },
  {
    code: 'african_american',
    name: 'African American',
    weight: 0.018855,
  },
  {
    code: 'hispanic',
    name: 'Hispanic',
    weight: 0.076106,
  },
]

const radarTopEthnicsData = computed(() => {
  return {
    labels: ethnicities.map((ethnicity) => ethnicity.name),
    datasets: [
      {
        data: ethnicities.map((ethnicity) => formatPercentage(ethnicity.weight).split('%')[0]),
        fill: false,
        backgroundColor: '#FFFFFF40',
        borderColor: '#FFFFFF',
        borderWidth: 0,
        pointBackgroundColor: 'green',
        pointRadius: 4,
        pointStyle: 'circle',
        tension: 0.2,
      },
    ],
  }
})
const ageRanges = computed(() =>
  Object.fromEntries(Object.entries(ages).sort(([keyA], [keyB]) => keyA.localeCompare(keyB))),
)

const ageMax = computed(() => Math.max(...Object.values(ages)))

const scatterChartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 2, 43, 33, 12, 20, 30, 40],
      backgroundColor: '#64ffaa',
      barThickness: 3,
    },
    {
      type: 'line',
      label: 'Line Dataset',
      lineTension: 0.4,
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: '#8c96ff',
    },
  ],
})
const scatterChartOptions = ref({
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
})

const doughnutChartData = ref({
  datasets: [
    {
      data: [25.3, 74.63],
      backgroundColor: ['#8c96ff', '#64ffaa'],
      borderWidth: 0,
      cutout: '88%',
      spacing: 1,
      rotation: 260,
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

const gender = {
  MALE: 0.253673,
  FEMALE: 0.746327,
}

const countries = {
  AR: 0.011504,
  BR: 0.033186,
  CN: 0.041593,
  GB: 0.011947,
  ID: 0.194248,
  IN: 0.034513,
  JP: 0.020354,
  KR: 0.030531,
  MX: 0.020796,
  MY: 0.056195,
  PH: 0.093805,
  RU: 0.019027,
  TH: 0.142035,
  TW: 0.020354,
  US: 0.053097,
  VN: 0.028761,
}

const topCountries = computed(() =>
  Object.entries(countries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {}),
)
</script>

<template>
  <div v-if="isLoading">
    <AppLoader />
  </div>
  <div class="profile-wrapper">
    <div class="influencer-detail-card flex h-full gap-4">
      <!-- Column 1: Image -->
      <div class="influencer-image flex-none">
        <img
          :src="influencer.profile_display_picture"
          alt="user-image"
          class="h-full w-full object-cover"
        />
      </div>

      <!-- Column 2: Detail Card Content Left -->
      <div class="influencer-detail-card-content-left flex flex-col gap-4 flex-grow">
        <div
          class="influencer-info-card bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-6"
        >
          <div class="influencer-info-card-header flex justify-between bg-opacity-5">
            <div class="influencer-name">
              <div class="influencer-badge flex items-center">
                <p class="text-[#fff] text-xl font-normal">{{ influencer.profile_name }}</p>
                <AppIcon icon-name="CheckBadgeIcon" icon-color="text-[#cdcbcb]" />
              </div>
              <p class="text-[#fff] text-opacity-50 text-sm">{{ influencer.profile_username }}</p>
            </div>
            <div class="influencer-followers-count">
              <p class="flex items-center text-xl text-[#fff]">
                <AppIcon icon-name="ArrowUpIcon" icon-color="text-green" />{{
                  formatShortScale(influencer.profile_followers.value)
                }}
              </p>
              <p class="text-[#fff] text-opacity-50 text-sm float-end">Followers</p>
            </div>
          </div>
          <div class="border-b-2 border-[#FFFFFF0A] my-4"></div>
          <div class="user-detail-card-body flex justify-between">
            <div class="user-detail-card-body-left">
              <div class="flex items-center text-sm text-[#FFFFFF]">
                <AppIcon icon-name="FlagIcon" icon-color="text-[#FFFFFF]" class="opacity-50" />
                <p v-capitalize>{{ influencer.profile_type }}</p>
              </div>
              <div class="flex items-center text-sm text-[#FFFFFF]">
                <AppIcon icon-name="FlagIcon" icon-color="text-[#FFFFFF]" class="opacity-50" />
                <span v-for="(theme, index) in influencer.profile_theme" :key="index">
                  <p v-capitalize class="pr-2">
                    {{ theme }}<span v-if="index < influencer.profile_theme.length - 1">,</span>
                  </p>
                </span>
              </div>
              <div class="flex items-center text-sm text-[#fff]">
                <AppIcon icon-name="FlagIcon" icon-color="text-[#fff]" class="opacity-50" />
                <span v-for="(theme, index) in influencer.profile_keyword" :key="index">
                  <p v-capitalize class="pr-2">
                    {{ theme }}<span v-if="index < influencer.profile_keyword.length - 1">,</span>
                  </p>
                </span>
              </div>
            </div>
            <div class="user-detail-card-body-right">
              <div class="flex items-center text-sm text-[#fff]">
                <AppIcon icon-name="FlagIcon" icon-color="text-[#fff]" class="opacity-50" />
                <p v-capitalize>{{ influencer.profile_country.name }}</p>
              </div>
              <div class="flex items-center text-sm text-[#fff]">
                <AppIcon icon-name="FlagIcon" icon-color="text-[#fff]" class="opacity-50" />
                <p v-capitalize>{{ GENDER[influencer.profile_gender] }}</p>
              </div>
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
          class="influencer-score-card bg-[#FFFFFF05] border-2 border-[#FFFFFF05] bg-opacity-5 p-6"
        >
          <div class="influencer-score-card-header">
            <p class="text-[#fff] text-xs" v-capitalize>QUALITY SCORE</p>
          </div>
          <div class="influencer-score-card-body flex justify-between items-center gap-x-0">
            <div class="influencer-score">
              <AppIcon icon-name="ArrowUpIcon" class="p-0 h-4 w-4 text-orange" />
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
          :cardPrcentage="formattedEngagementRate"
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
          :cardPrcentage="formatShortScale(influencer.profile_media_value.value)"
          :class="getStyleForDirection(influencer.profile_media_value.direction).colorClass"
        />
      </div>
    </div>

    <div class="influencer-content-container">
      <ProfileAudienceCard cardHeaderText="CONTENT">
        <div class="influencer-content-body">
          <ProfileContentCard />
        </div>
        <div class="influencer-content-footer flex justify-center pt-6">
          <AppButton />
        </div>
      </ProfileAudienceCard>
    </div>

    <div class="influencer-audience-card-wrapper py-4">
      <ProfileAudienceCard cardHeaderText="AUDIENCE DEMOGRAPHICS">
        <div class="influencer-audience-card flex flex-col w-full items-center">
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
                    <div
                      class="influencer-chart-legend-indicator h-2 w-2 rounded-lg bg-purpil"
                    ></div>
                    <p class="text-[#fff] text-opacity-50 text-xs">
                      Male: {{ formatPercentage(gender.MALE) }}
                    </p>
                  </div>
                  <div class="influencer-chart-legend flex items-center gap-2">
                    <div
                      class="influencer-chart-legend-indicator h-2 w-2 rounded-lg bg-green"
                    ></div>
                    <p class="text-[#fff] text-opacity-50 text-xs">
                      Female: {{ formatPercentage(gender.FEMALE) }}
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
      </ProfileAudienceCard>
    </div>

    <div class="influencer-content-scanner-card-wrapper border-t-2 border-[#FFFFFF05] py-6 mt-6">
      <div class="influencer-content-scanner-header flex justify-between items-center">
        <p class="text-[#fff] text-xs">CONTENT SCANNER</p>
      </div>
      <div class="influencer-content-scanner-card px-40 pt-20">
        <AppInput />
        <div class="influencer-content-scanner-card-body flex items-center pt-2 gap-2">
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
      <div class="performance-timeline-card-body py-8">
        <AppChart
          chartType="scatter"
          :chartData="scatterChartData"
          :chartOptions="scatterChartOptions"
        />
      </div>
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
