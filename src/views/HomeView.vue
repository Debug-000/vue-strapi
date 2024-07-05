<script setup lang="ts">
import BottomSection from '@/components/BottomSection.vue'
import HeaderText from '@/components/HeaderText.vue'
import TopSection from '@/components/TopSection.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      imgStyle: {
        top: '-35rem',
        right: '-10rem',
        transform: ''
      },
      imgInitialPosition: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    handleMouseMove(event: any) {
      const { clientX, clientY, currentTarget } = event
      const { offsetWidth, offsetHeight } = currentTarget

      const mouseXPercent = (clientX / offsetWidth) * 200
      const mouseYPercent = (clientY / offsetHeight) * 100

      const movementFactor = 0.05

      const newPosX = this.imgInitialPosition.x - mouseXPercent * movementFactor
      const newPosY = this.imgInitialPosition.y - mouseYPercent * movementFactor

      this.imgStyle.transform = `translate(${newPosX}%, ${newPosY}%)`
    }
  }
}
</script>

<template>
  <main @mousemove="handleMouseMove">
    <div class="w-full h-[25.5rem] pb-[12rem] pt-[6rem] relative">
      <img
        src="../assets/home-bg.png"
        alt="right"
        :style="imgStyle"
        class="absolute z-10 w-[170rem] h-[98rem] object-cover pointer-events-none"
      />
      <HeaderText title="Home" desc="There is no `I` in GraphQL" />
    </div>
    <div class="bg-white py-[7rem] relative z-20">
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
