<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

interface Post {
  Title: string
  Description: string
}

const firstComp = gql`
  query {
    servicesPosts {
      data {
        attributes {
          Title
          Description
        }
      }
    }
  }
`

const { result, loading, error } = useQuery(firstComp)

const posts = computed(() => {
  if (loading.value || error.value) return []
  return result.value?.servicesPosts.data.map((post: { attributes: any }) => post.attributes) ?? []
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
      class="md:flex-row flex-col flex justify-center items-start w-full gap-4 px-4"
      v-if="posts.length"
    >
      <div class="relative w-full md:w-[50%] max-w-[33rem]">
        <img src="../assets/pc-work.png" alt="multi" class="object-cover" />
      </div>
      <div class="w-full md:w-[50%]" v-if="posts.length > 0">
        <h2 class="blinker-bold text-[#040e56] text-[1.6rem]">{{ getPostByIndex(2)?.Title }}</h2>
        <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7 mt-4">
          {{ getPostByIndex(2)?.Description }}
        </p>
      </div>
    </div>
  </div>
</template>
