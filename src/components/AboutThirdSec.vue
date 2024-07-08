<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

interface Post {
  Title: string
  Description: string
  Descript: string
  Desc: string
}

const firstComp = gql`
  query {
    aboutPosts {
      data {
        attributes {
          Title
          Description
          Descript
          Desc
        }
      }
    }
  }
`

const { result, loading, error } = useQuery(firstComp)

const posts = computed(() => {
  if (loading.value || error.value) return []
  return result.value?.aboutPosts.data.map((post: { attributes: any }) => post.attributes) ?? []
})

const getPostByIndex = (index: number): Post | undefined => {
  return posts.value[index]
}
</script>

<template>
  <p v-if="loading" class="text-black text-center">Loading...</p>
  <p v-if="error" class="text-black text-center">{{ error }} Something went wrong!</p>
  <div v-else>
    <div
      class="md:flex-row flex-col flex justify-center items-center w-full gap-8 px-4"
      v-if="posts.length"
    >
      <div class="w-full md:w-[45%]" v-if="posts.length > 0">
        <h1 class="blinker-bold text-[#040e56] text-[3.5rem]">{{ getPostByIndex(2)?.Title }}</h1>

        <div class="flex flex-col justify-start items-start">
          <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7 mb-12">
            {{ getPostByIndex(2)?.Description }}
          </p>
          <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7 mb-12">
            {{ getPostByIndex(2)?.Descript }}
          </p>
          <p class="blinker-bold text-[#9b9b9b] text-[1.1rem] leading-7 mb-12">
            {{ getPostByIndex(2)?.Desc }}
          </p>
        </div>
      </div>
      <div class="relative w-full max-w-[35rem]">
        <img src="../assets/blocks.jpg" alt="multi" class="object-cover" />
      </div>
    </div>
  </div>
</template>
