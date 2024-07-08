<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import TeamNavbar from './components/TeamNavbar.vue'
import TeamFooter from './components/TeamFooter.vue'

const isScrolled = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div class="bg-[#040e56] px-4 relative z-20">
    <TeamNavbar />
  </div>
  <RouterView />

  <button
    v-show="isScrolled"
    class="bg-[#050714] px-3 py-2 fixed bottom-12 right-12 z-50"
    @click="scrollToTop"
  >
    <span class="pi pi-arrow-up"></span>
  </button>

  <div class="guys-home relative px-4 z-20">
    <TeamFooter />
  </div>
</template>

<style scoped>
button {
  transition: opacity 0.3s;
}

button[v-show='false'] {
  opacity: 0;
  pointer-events: none;
}
</style>
