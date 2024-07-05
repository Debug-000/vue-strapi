<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="max-w-[1140px] m-auto py-6">
    <div class="flex justify-between items-center">
      <div>
        <RouterLink to="/">
          <img src="../assets/gqlteam.png" alt="site-logo" class="w-[14.2rem]" />
        </RouterLink>
      </div>
      <ul
        class="hidden md:flex justify-start items-center gap-8 py-2 px-4 text-[1.1rem] blinker-regular"
      >
        <RouterLink to="/" v-slot="{ isActive }">
          <span :class="[isActive ? 'text-[#813687]' : 'text-white', 'hover:text-[#813687]']"
            >Home</span
          >
        </RouterLink>
        <RouterLink to="/services" v-slot="{ isActive }">
          <span :class="[isActive ? 'text-[#813687]' : 'text-white', 'hover:text-[#813687]']"
            >Services</span
          >
        </RouterLink>
        <RouterLink to="/showcase" v-slot="{ isActive }">
          <span :class="[isActive ? 'text-[#813687]' : 'text-white', 'hover:text-[#813687]']"
            >Showcase</span
          >
        </RouterLink>
        <RouterLink to="/about" v-slot="{ isActive }">
          <span :class="[isActive ? 'text-[#813687]' : 'text-white', 'hover:text-[#813687]']"
            >About us</span
          >
        </RouterLink>
        <RouterLink to="/contact" v-slot="{ isActive }">
          <span :class="[isActive ? 'text-[#813687]' : 'text-white', 'hover:text-[#813687]']"
            >Contact</span
          >
        </RouterLink>
      </ul>
    </div>
  </header>
</template>
