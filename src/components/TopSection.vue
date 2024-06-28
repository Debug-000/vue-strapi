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
    <div class="w-full md:w-[45%]" v-if="posts.length">
      <div v-if="posts.length > 0">
        <h1 class="blinker-bold text-[#040e56] text-[3.5rem]">
          {{ getPostByIndex(0)?.attributes.Title }}
        </h1>
        <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7">
          {{ getPostByIndex(0)?.attributes.Description }}
        </p>
      </div>
    </div>
  </div>
</template>
