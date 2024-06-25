<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="max-w-[1140px] m-auto py-6 md:px-0 px-2">
    <div class="flex justify-between items-center">
      <div>
        <img src="../assets/gqlteam.png" alt="site-logo" class="w-[14.2rem]" />
      </div>
      <ul class="flex justify-start items-center gap-8 py-2 px-4 text-[1.1rem] blinker-regular">
        <RouterLink to="/" class="text-white hover:text-[#813687]">Home</RouterLink>
        <RouterLink to="/services" class="text-white hover:text-[#813687]">Services</RouterLink>
        <RouterLink to="/showcase" class="text-white hover:text-[#813687]">Showcase</RouterLink>
        <RouterLink to="/about" class="text-white hover:text-[#813687]">About us</RouterLink>
        <RouterLink to="/contact" class="text-white hover:text-[#813687]">Contact</RouterLink>
      </ul>
    </div>
  </header>
</template>
