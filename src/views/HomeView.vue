<script setup lang="ts">
import BottomSection from '@/components/BottomSection.vue'
import HeaderText from '@/components/HeaderText.vue'
import TeamFooter from '@/components/TeamFooter.vue'
import TopSection from '@/components/TopSection.vue'
</script>

<template>
  <main>
    <div class="w-full h-[25.5rem] pb-[12rem] pt-[6rem] back-home relative">
      <img
        src="../assets/overlay-right.png"
        alt="right"
        class="absolute top-[-30rem] right-0 z-10"
      />
      <HeaderText title="Home" desc="There is no `I` in GraphQL" />
    </div>
    <div class="bg-white py-[7rem]">
      <div class="max-w-[1140px] m-auto">
        <TopSection />
      </div>
    </div>
    <div class="back-home relative">
      <div class="max-w-[1140px] m-auto">
        <img
          src="../assets/overlay-left.png"
          alt="right"
          class="absolute top-[-10rem] left-0 z-10 w-[90%] opacity-55 h-[45rem] object-cover"
        />
        <BottomSection />
      </div>
    </div>
    <TeamFooter />
  </main>
</template>
