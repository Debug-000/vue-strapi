<script setup lang="ts"></script>

<template>
  <div class="md:flex-row flex-col flex justify-center items-center w-full gap-8 px-4">
    <div class="relative w-full md:w-[60%] max-w-[33rem] h-[27rem]">
      <img
        src="../assets/multi-ethnic.jpg"
        alt="multi"
        class="w-[28rem] absolute top-0 right-0 h-[18rem] object-cover"
      />
      <img
        src="../assets/asian-businessmen.jpg"
        alt="asian"
        class="w-[28rem] absolute bottom-0 left-0 h-[18rem] object-cover"
      />
    </div>
    <div class="w-full md:w-[45%]">
      <h1 class="blinker-bold text-[#040e56] text-[3.5rem]">Hello!</h1>
      <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7 mb-12">
        And welcome to GQLTeam! I’m Dan, the founder of this passionate and dedicated team. Our
        story began as a shared dream – to create a company that combines innovative software
        solutions with a strong ethos of teamwork and collaboration.
      </p>
      <a href="#" class="text-white bg-[#497DFF] hover:bg-[#040E56] blinker-semibold py-4 px-6"
        >Our Service</a
      >
    </div>
  </div>
</template>
