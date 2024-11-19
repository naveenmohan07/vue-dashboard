<!-- <template>
  <div class="parent">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="`grid-item item-${index + 1}`"
      :style="getGridStyle(image)"
    >
      <div class="badge absolute">
        <p class="bg-[##303349] m-2 p-0 text-sm px-1 text-[#fff]">{{ index + 1 }}</p>
      </div>
      <img :src="image.src" :alt="image.alt" class="image" />
    </div>
  </div>
</template> -->

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

      <!-- Hover Overlay Text -->
      <div
        class="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <p class="text-white text-lg">Hovered Text</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const images = ref([
  {
    src: 'https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpg',
    alt: 'Image 1',
    gridColumn: 'span 2',
    gridRow: 'span 2',
    gridColumnStart: 1,
    gridRowStart: 1,
  },
  {
    src: 'https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpg',
    alt: 'Image 2',
    gridColumnStart: 3,
    gridRowStart: 1,
  },
  {
    src: 'https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpg',
    alt: 'Image 3',
    gridColumnStart: 4,
    gridRowStart: 1,
  },
  {
    src: 'https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpg',
    alt: 'Image 4',
    gridColumn: 'span 2',
    gridRow: 'span 2',
    gridColumnStart: 3,
    gridRowStart: 2,
  },
  {
    src: 'https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpg',
    alt: 'Image 5',
    gridColumnStart: 1,
    gridRowStart: 3,
  },
  {
    src: 'https://i.pinimg.com/736x/0f/b4/7b/0fb47bdb4df82211dc0a139c35f547f1.jpgg',
    alt: 'Image 6',
    gridColumnStart: 2,
    gridRowStart: 3,
  },
  { src: 'image7.jpg', alt: 'Image 7', gridColumnStart: 5, gridRowStart: 1 },
  { src: 'image8.jpg', alt: 'Image 8', gridColumnStart: 5, gridRowStart: 2 },
  { src: 'image9.jpg', alt: 'Image 9', gridColumnStart: 5, gridRowStart: 3 },
  { src: 'image10.jpg', alt: 'Image 10', gridColumnStart: 6, gridRowStart: 1 },
  { src: 'image11.jpg', alt: 'Image 11', gridColumnStart: 6, gridRowStart: 2 },
  { src: 'image12.jpg', alt: 'Image 12', gridColumnStart: 6, gridRowStart: 3 },
])

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
  background-color: rgba(0, 0, 0, 0.6);
}

.grid-item {
  background-color: lightgray;
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

.parent:on-hover {
  background-color: red;
}
</style>
