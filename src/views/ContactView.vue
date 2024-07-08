<script setup lang="ts">
import ContactSec from '@/components/ContactSec.vue'
import HeaderText from '@/components/HeaderText.vue'
</script>

<template>
  <div class="w-full h-[25.5rem] pb-[12rem] pt-[6rem] back-home relative">
    <img
      src="../assets/overlay-right.png"
      alt="right"
      class="absolute top-[-38rem] right-0 z-10 w-[160rem] h-[100rem] object-cover pointer-events-none"
    />
    <HeaderText title="Contact" desc="" />
  </div>

  <div class="bg-white py-[5rem] px-4">
    <div class="max-w-[1140px] m-auto">
      <ContactSec />
    </div>
  </div>
</template>
