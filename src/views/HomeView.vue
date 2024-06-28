<script setup lang="ts">
import BottomSection from '@/components/BottomSection.vue'
import HeaderText from '@/components/HeaderText.vue'
import TopSection from '@/components/TopSection.vue'
</script>

<template>
  <main>
    <div class="w-full h-[25.5rem] pb-[12rem] pt-[6rem] back-home relative">
      <img
        src="../assets/overlay-right.png"
        alt="right"
        class="absolute top-[-38rem] right-0 z-10 w-[160rem] h-[100rem] pointer-events-none"
      />
      <HeaderText title="Home" desc="There is no `I` in GraphQL" />
    </div>
    <div class="bg-white py-[7rem]">
      <div class="max-w-[1140px] m-auto">
        <TopSection />
      </div>
    </div>
    <div class="sec-home relative h-auto overflow-hidden">
      <div class="max-w-[1140px] m-auto">
        <img
          src="../assets/overlay-left.png"
          alt="right"
          class="absolute top-[0rem] left-0 z-10 w-full opacity-55 h-[41rem] object-cover pointer-events-none"
        />
        <BottomSection />
      </div>
    </div>
  </main>
</template>
