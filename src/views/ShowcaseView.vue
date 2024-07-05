<script setup lang="ts">
import HeaderText from '@/components/HeaderText.vue'
import ShowcaseFirst from '@/components/ShowcaseFirst.vue'
import ShowcaseSecond from '@/components/ShowcaseSecond.vue'
</script>

<template>
  <div class="w-full h-[25.5rem] pb-[12rem] pt-[6rem] back-home relative">
    <img
      src="../assets/overlay-right.png"
      alt="right"
      class="absolute top-[-38rem] right-0 z-10 w-[160rem] h-[100rem] pointer-events-none"
    />
    <HeaderText title="Showcase" desc="" />
  </div>
  <div class="bg-white py-[8rem]">
    <div class="max-w-[1140px] m-auto">
      <ShowcaseFirst />
    </div>
  </div>
  <div class="sec-home relative h-auto overflow-hidden">
    <div class="max-w-[1140px] m-auto">
      <img
        src="../assets/overlay-right.png"
        alt="right"
        class="absolute top-[-10rem] right-[10rem] z-10 w-full opacity-55 h-[61rem] object-contain pointer-events-none"
      />
      <ShowcaseSecond />
    </div>
  </div>
</template>
