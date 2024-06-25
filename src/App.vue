<script setup lang="ts">
import { RouterView } from 'vue-router'
import TeamNavbar from './components/TeamNavbar.vue'
</script>

<template>
  <div class="bg-[#040e56] relative z-20">
    <TeamNavbar />
  </div>
  <RouterView />
</template>
