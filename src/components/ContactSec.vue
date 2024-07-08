<script setup lang="ts"></script>

<template>
  <div class="flex lg:flex-row flex-col justify-between items-center">
    <div class="relative w-full md:w-[60%] max-w-[33rem] flex flex-col justify-start items-start">
      <h2 class="blinker-semibold text-[1.6rem] text-[#993E90]">Get in touch</h2>
      <h1 class="blinker-bold text-[#040e56] text-[3.5rem] leading-[3.5rem] mt-4">
        Dont hesitate <br />
        to ask a question
      </h1>
      <a
        href="tel:+40742223433"
        class="text-[#040e56] hover:text-[#813687] blinker-bold text-[1.7rem] mt-16 flex items-center gap-4"
      >
        <span class="pi pi-phone"></span> +40742223433</a
      >
      <a
        href="mailto:info@gqlteam.com"
        class="text-[#040e56] hover:text-[#813687] blinker-bold text-[1.7rem] mt-4 flex items-center gap-4"
        ><span class="pi pi-envelope"></span> info@gqlteam.com</a
      >
      <img
        src="../assets/Contact-Logo.png"
        alt="Contact-Logo"
        class="pointer-events-none w-[18rem] my-8 m-auto"
      />
    </div>
    <div class="text-black shadow-lg w-full lg:w-[50%] p-12 m-4">
      <form class="flex flex-col justify-start items-start">
        <label for="name">Your Name*</label>
        <input
          type="text"
          id="name"
          class="border border-[#d4d4d4] w-full p-2 outline-none mb-4"
          required
        />
        <label for="email">Your Email*</label>
        <input
          type="email"
          id="email"
          class="border border-[#d4d4d4] w-full p-2 outline-none mb-4"
          required
        />
        <label for="subject">Your Name*</label>
        <input
          type="text"
          id="subject"
          class="border border-[#d4d4d4] w-full p-2 outline-none mb-4"
          required
        />
        <label for="message">Your Message (optional)</label>
        <textarea
          name="message"
          id="message"
          rows="7"
          class="border border-[#d4d4d4] w-full p-2 outline-none mb-1 resize-none"
        ></textarea>
        <button
          type="submit"
          class="bg-[#993e90] hover:bg-[#040E56] text-white px-16 py-3 uppercase"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
