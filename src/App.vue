<script setup lang="ts">
import { RouterView } from 'vue-router'
import TeamNavbar from './components/TeamNavbar.vue'
import TeamFooter from './components/TeamFooter.vue'
</script>

<template>
  <div class="bg-[#040e56] px-4 relative z-20">
    <TeamNavbar />
  </div>
  <RouterView />

  <div class="guys-home relative px-4 z-20">
    <TeamFooter />
  </div>
</template>
