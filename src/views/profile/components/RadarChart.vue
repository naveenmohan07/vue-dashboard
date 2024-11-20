<template>
  <div class="chart-container py-4">
    <canvas ref="radarChartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

// Define component props
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  config: {
    type: Object,
    required: true,
  },
})

// Custom plugin to add shadow effect
const shadowPlugin = {
  id: 'shadowPlugin',
  beforeDatasetsDraw: (chart) => {
    const ctx = chart.ctx
    ctx.save()
    ctx.shadowColor = '#FFFFFF05'
    ctx.shadowBlur = 40
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 10
  },
  afterDatasetsDraw: (chart) => {
    const ctx = chart.ctx
    ctx.restore()
  },
}

// Register required Chart.js components and the shadow plugin
Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  shadowPlugin,
)

const radarChartCanvas = ref(null)

onMounted(() => {
  new Chart(radarChartCanvas.value, {
    type: 'radar',
    data: props.data,
    options: {
      ...props.config,
      responsive: true,
      maintainAspectRatio: false,
    },
  })
})
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
