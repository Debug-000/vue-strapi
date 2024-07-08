<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
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
      <button class="md:hidden" @click="toggleMobileMenu">
        <span v-if="!isMobileMenuOpen" class="text-[1.7rem]">☰</span>
        <span v-else class="text-[1.5rem]">✖</span>
      </button>
    </div>
    <ul
      v-if="isMobileMenuOpen"
      class="md:hidden flex flex-col items-start bg-[#040e56] border-t border-b border-[#f1f1f12a] absolute gap-4 py-8 w-full px-8 left-0 md:-top-28 top-20 transition ease-in-out delay-150 duration-300 text-[1.2rem] blinker-regular"
    >
      <RouterLink to="/" v-slot="{ isActive }" class="w-full flex" @click="toggleMobileMenu">
        <span
          :class="[isActive ? 'text-[#813687] ' : 'text-white', 'hover:text-[#813687] w-full py-2']"
          >Home</span
        >
      </RouterLink>
      <RouterLink
        to="/services"
        v-slot="{ isActive }"
        class="w-full flex"
        @click="toggleMobileMenu"
      >
        <span
          :class="[
            isActive ? 'text-[#813687] ' : 'text-white ',
            'hover:text-[#813687] w-full  py-2'
          ]"
          >Services</span
        >
      </RouterLink>
      <RouterLink
        to="/showcase"
        v-slot="{ isActive }"
        class="w-full flex"
        @click="toggleMobileMenu"
      >
        <span
          :class="[
            isActive ? 'text-[#813687] ' : 'text-white ',
            'hover:text-[#813687] w-full  py-2'
          ]"
          >Showcase</span
        >
      </RouterLink>
      <RouterLink to="/about" v-slot="{ isActive }" class="w-full flex" @click="toggleMobileMenu">
        <span
          :class="[
            isActive ? 'text-[#813687] ' : 'text-white ',
            'hover:text-[#813687] w-full  py-2'
          ]"
          >About us</span
        >
      </RouterLink>
      <RouterLink to="/contact" v-slot="{ isActive }" class="w-full flex" @click="toggleMobileMenu">
        <span
          :class="[
            isActive ? 'text-[#813687] ' : 'text-white ',
            'hover:text-[#813687] w-full  py-2'
          ]"
          >Contact</span
        >
      </RouterLink>
    </ul>
  </header>
</template>
