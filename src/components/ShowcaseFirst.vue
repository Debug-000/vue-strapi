<script setup lang="ts"></script>

<template>
  <div class="md:flex-row flex-col flex justify-center items-start w-full gap-20 px-4">
    <div class="relative w-full md:w-[60%] max-w-[33rem]">
      <h2 class="blinker-semibold text-[1.6rem] text-[#497DFF]">Project Title:</h2>
      <h1 class="blinker-bold text-[#040e56] text-[3.5rem] leading-[3.5rem] mt-4">
        User-Centric Application Development
      </h1>
    </div>
    <div class="flex flex-col gap-4">
      <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7">
        At GQLTeam, we don’t just build software, we empower users. One of our hallmark projects is
        a revolutionary application built with Golang, Prisma 1.34.10, and gqlgen. This application
        stands as a testament to our commitment to creating user-friendly, versatile, and powerful
        software.
      </p>
      <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7">
        One of the most innovative aspects of this project is the ability it offers to users with
        minimal technical knowledge to design the application around their needs. Using a web
        interface, users can create and manipulate entities as per their requirements. For example,
        in a healthcare context, users could create entities such as ‘Patient’, ‘Doctor’, and
        ‘Schedule’. These entities can then be populated with data, manipulated, and used in various
        views.
      </p>
      <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7">
        What makes this even more powerful is the granular permission system we’ve implemented for
        each field. This ensures that sensitive data is protected and that users have the right
        level of access for their role.
      </p>
    </div>
  </div>
</template>
