<script setup lang="ts">
import HeaderText from '@/components/HeaderText.vue'
import ServicesFirstSec from '@/components/ServicesFirstSec.vue'
import ServicesLastSec from '@/components/ServicesLastSec.vue'
import ServicesSec from '@/components/ServicesSec.vue'
import ServicesThirdSec from '@/components/ServicesThirdSec.vue'
</script>

<template>
  <div class="w-full h-[25.5rem] pb-[12rem] pt-[6rem] back-home relative">
    <img
      src="../assets/overlay-right.png"
      alt="right"
      class="absolute top-[-38rem] right-0 z-10 w-[160rem] h-[100rem] object-cover pointer-events-none"
    />
    <HeaderText title="Services" desc="Golang Development Services" />
  </div>
  <div class="bg-white py-[7rem]">
    <div class="max-w-[1140px] m-auto">
      <ServicesFirstSec />
    </div>
  </div>
  <div class="sec-home relative h-auto overflow-hidden">
    <div class="max-w-[1140px] m-auto">
      <img
        src="../assets/overlay-right.png"
        alt="right"
        class="absolute top-[0rem] left-0 z-10 w-full opacity-55 h-[41rem] object-cover pointer-events-none"
      />
      <ServicesSec />
    </div>
  </div>
  <div class="bg-white py-[10rem]">
    <div class="max-w-[1140px] m-auto">
      <ServicesThirdSec />
    </div>
  </div>
  <div class="sec-home relative h-auto overflow-hidden">
    <div class="max-w-[1140px] m-auto">
      <img
        src="../assets/overlay-left.png"
        alt="right"
        class="absolute top-[0rem] left-0 z-10 w-full opacity-55 h-[60rem] object-cover pointer-events-none"
      />
      <ServicesLastSec />
    </div>
  </div>
</template>
