<template>
  <div class="parent">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="`grid-item item-${index + 1}`"
      :style="getGridStyle(image)"
      class="relative group"
    >
      <div class="badge absolute">
        <p class="bg-[#303349] m-2 p-0 text-sm px-1 text-[#fff]">{{ index + 1 }}</p>
      </div>
      <img :src="image.src" :alt="image.alt" class="image" />
      <div
        class="overlay absolute inset-0 flex bg-[#000000] bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div class="overlay-text w-full h-full p-6 overflow-scroll">
          <p class="text-whit text-sm">15/05/2024</p>
          <div
            class="image-reach flex justify-between items-center pt-2"
            v-for="item in reachData"
            :key="item.key"
          >
            <p class="text-offWhite text-sm">{{ item.key }}</p>
            <p class="text-offWhite text-sm">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import photo from '@/assets/images/Photo.png'
import photo2 from '@/assets/images/2.png'
import photo3 from '@/assets/images/3.png'
import photo4 from '@/assets/images/4.png'
import photo5 from '@/assets/images/5.png'
import photo6 from '@/assets/images/6.png'
import photo7 from '@/assets/images/7.png'
import photo8 from '@/assets/images/8.png'
import photo10 from '@/assets/images/10.png'
import photo11 from '@/assets/images/11.png'
import photo12 from '@/assets/images/12.png'

const images = ref([
  {
    src: photo,
    alt: 'Image 1',
    gridColumn: 'span 2',
    gridRow: 'span 2',
    gridColumnStart: 1,
    gridRowStart: 1,
  },
  {
    src: photo2,
    alt: 'Image 2',
    gridColumnStart: 3,
    gridRowStart: 1,
  },
  {
    src: photo3,
    alt: 'Image 3',
    gridColumnStart: 4,
    gridRowStart: 1,
  },
  {
    src: photo4,
    alt: 'Image 4',
    gridColumn: 'span 2',
    gridRow: 'span 2',
    gridColumnStart: 3,
    gridRowStart: 2,
  },
  {
    src: photo5,
    alt: 'Image 5',
    gridColumnStart: 1,
    gridRowStart: 3,
  },
  {
    src: photo6,
    alt: 'Image 6',
    gridColumnStart: 2,
    gridRowStart: 3,
  },
  { src: photo7, alt: 'Image 7', gridColumnStart: 5, gridRowStart: 1 },
  { src: photo8, alt: 'Image 8', gridColumnStart: 5, gridRowStart: 2 },
  { src: photo2, alt: 'Image 9', gridColumnStart: 5, gridRowStart: 3 },
  { src: photo10, alt: 'Image 10', gridColumnStart: 6, gridRowStart: 1 },
  { src: photo11, alt: 'Image 11', gridColumnStart: 6, gridRowStart: 2 },
  { src: photo12, alt: 'Image 12', gridColumnStart: 6, gridRowStart: 3 },
])

const reachData = [
  { key: 'Reach', value: '20.7M' },
  { key: 'Impressions', value: '20.7M' },
  { key: 'Engagement Rate', value: '2.8%' },
  { key: 'Likes:', value: '2.8M' },
  { key: 'Comments:', value: '29.9K' },
  { key: 'Influencer EMV:', value: '2.8M' },
]

function getGridStyle(item) {
  const styles: any = {}

  if (item.gridColumnStart) {
    styles.gridColumnStart = item.gridColumnStart
  }

  if (item.gridRowStart) {
    styles.gridRowStart = item.gridRowStart
  }

  if (item.gridColumn) {
    styles.gridColumn = item.gridColumn
  }

  if (item.gridRow) {
    styles.gridRow = item.gridRow
  }

  return styles
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
}
.overlay {
  background-color: rgba(23, 23, 23, 0.746);
}

.grid-item {
  position: relative;
}

.group:hover .overlay {
  opacity: 1;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
</style>
