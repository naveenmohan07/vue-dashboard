<template>
  <div v-if="svgContent" v-html="svgContent" class="svg-icon"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const svgContent = ref()

const props = defineProps({
  iconPath: {
    type: String,
    required: true,
  },
})

const loadSvgInline = async () => {
  try {
    const response = await fetch(`/src/assets/svg/${props.iconPath}.svg`)
    const text = await response.text()
    svgContent.value = text
  } catch (error) {
    console.error('Error loading SVG: ', error)
  }
}

onMounted(() => {
  console.log('iconPath', `/src/assets/svg/${props.iconPath}.svg`)
  loadSvgInline()
})

watch(
  () => props.iconPath,
  (newPath: unknown) => {
    if (newPath) {
      loadSvgInline()
    }
  },
  { immediate: true },
)
</script>
