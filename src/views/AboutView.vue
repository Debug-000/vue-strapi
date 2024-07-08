<script setup lang="ts">
import AboutFirstSec from '@/components/AboutFirstSec.vue'
import AboutSecondSec from '@/components/AboutSecondSec.vue'
import AboutThirdSec from '@/components/AboutThirdSec.vue'
import HeaderText from '@/components/HeaderText.vue'
</script>

<template>
  <div class="w-full h-[25.5rem] pb-[12rem] pt-[6rem] back-home relative">
    <img
      src="../assets/overlay-right.png"
      alt="right"
      class="absolute top-[-38rem] right-0 z-10 w-[160rem] h-[100rem] object-cover pointer-events-none"
    />
    <HeaderText title="About Us" desc="" />
  </div>
  <div class="bg-white py-[7rem]">
    <div class="max-w-[1140px] m-auto">
      <AboutFirstSec />
    </div>
  </div>
  <div class="sec-home relative h-auto overflow-hidden">
    <div class="max-w-[1140px] m-auto">
      <img
        src="../assets/overlay-left.png"
        alt="right"
        class="absolute top-[0rem] left-0 z-10 w-full opacity-55 h-[61rem] object-cover pointer-events-none"
      />
      <AboutSecondSec />
    </div>
  </div>
  <div class="bg-white py-[7rem]">
    <div class="max-w-[1140px] m-auto">
      <AboutThirdSec />
    </div>
  </div>
</template>
