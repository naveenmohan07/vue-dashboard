<template>
  <component :is="icon" :class="iconClass" class="h-8 w-8 p-2" />
</template>

<script lang="ts">
import * as Icons from '@heroicons/vue/24/outline'

export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      required: false,
    },
  },
  computed: {
    icon() {
      return Icons[this.iconName]
    },

    iconClass() {
      return this.iconColor
    },
  },
}
</script>
