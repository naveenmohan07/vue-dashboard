<template>
  <div class="relative inline-block text-left">
    <p class="text-[#FFFFFF] opacity-80 text-sm px-4" @click="toggleDropdown">
      {{ 'CURRENCY - ' + (selected || '') }}
      <span class="ml-1">&#9662;</span>
    </p>

    <div v-if="isOpen" class="absolute mt-2 bg-whit w-24 right-2 rounded shadow-lg">
      <ul>
        <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

const isOpen = ref(false)
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['selected'])
const selected = ref(props.options[0])

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: any) => {
  selected.value = option
  isOpen.value = false
  emit('selected', option)
}
</script>
