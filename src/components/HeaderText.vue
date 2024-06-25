<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="max-w-[1140px] m-auto text-center">
    <h1 class="blinker-bold text-[5.2rem]">{{ title }}</h1>
    <p class="blinker-bold text-[1.55rem]">{{ desc }}</p>
  </div>
</template>
