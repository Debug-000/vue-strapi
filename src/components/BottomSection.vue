<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Post {
  id: number
  attributes: {
    Title: string
    Description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

const posts = ref<Post[]>([])

const fetchPosts = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/posts')
    posts.value = response.data.data
  } catch (error) {
    console.error(error)
  }
}

const getPostByIndex = (index: number): Post | undefined => {
  return posts.value[index]
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div v-if="posts.length">
    <div class="flex flex-col gap-4 py-[9rem] px-4" v-if="posts.length > 0">
      <h1 class="blinker-bold text-white text-[3.5rem]">
        {{ getPostByIndex(1)?.attributes.Title }}
      </h1>
      <div class="flex flex-col gap-4">
        <p class="blinker-regular text-white leading-7">
          {{ getPostByIndex(1)?.attributes.Description }}
        </p>
        <p class="blinker-regular text-white leading-7">
          At GQLTeam, you’re not just engaging a service provider; you’re partnering with a team
          that understands the transformative power of robust software solutions. We’re here to
          bring your visions to life as functional, scalable, and secure software that not just
          meets, but exceeds your expectations.
        </p>
        <p class="blinker-regular text-white leading-7">
          At GQLTeam, we’re not just a software company. We’re a team committed to empowering
          businesses, fostering collaboration, and paving the way for the future of technology.
        </p>
      </div>
      <h2 class="blinker-semibold text-white text-[1.6rem]">
        Welcome to the team. Together, we’ll shape the future of software development.
      </h2>
    </div>
  </div>
</template>
