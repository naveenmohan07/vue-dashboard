<script setup lang="ts">
const props = defineProps({
  errorMessage: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="error-wrapper">
    <p>{{ errorMessage }}</p>
  </div>
</template>
