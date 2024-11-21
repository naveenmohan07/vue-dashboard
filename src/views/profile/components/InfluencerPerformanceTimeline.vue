<script setup lang="ts">
import AppChart from '@/core/components/AppChart.vue'
import { ref } from 'vue'
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
</script>

<template>
  <div class="influencer-performance-timeline-card-wrapper border-t-2 border-[#FFFFFF05] py-6 mt-6">
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
</template>
