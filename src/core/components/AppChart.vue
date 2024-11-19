<script setup lang="ts">
import { defineProps, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  chartType: { type: String, required: true },
  chartData: { type: Object, required: true },
  chartOptions: { type: Object, default: () => ({}) },
})

const chartRef = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

const renderChart = () => {
  if (chartInstance) {
    chartInstance.destroy()
  }

  if (chartRef.value) {
    chartInstance = new Chart(chartRef.value, {
      type: props.chartType as any,
      data: props.chartData,
      options: props.chartOptions,
    })
  }
}

onMounted(renderChart)

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>
