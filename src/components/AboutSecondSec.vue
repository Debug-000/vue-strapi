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
  <div
    class="md:flex-row flex-col flex justify-center items-center w-full gap-8 px-4 py-[8rem]"
    v-if="posts.length"
  >
    <div class="w-full md:w-[45%]" v-if="posts.length > 0">
      <h1 class="blinker-bold text-white text-[3.5rem]">{{ getPostByIndex(1)?.Title }}</h1>
      <div class="flex flex-col gap-4">
        <p class="blinker-regular text-white leading-7">
          {{ getPostByIndex(1)?.Description }}
        </p>
        <p class="blinker-regular text-white leading-7">
          {{ getPostByIndex(1)?.Descript }}
        </p>
        <p class="blinker-regular text-white leading-7">
          {{ getPostByIndex(1)?.Desc }}
        </p>
      </div>
    </div>
    <div class="relative w-full md:w-[60%] max-w-[33rem] h-[40rem]">
      <img
        src="../assets/multi-ethnic.jpg"
        alt="multi"
        class="w-[28rem] absolute top-0 right-0 h-[18rem] object-cover"
      />
      <img
        src="../assets/asian-businessmen.jpg"
        alt="asian"
        class="w-[28rem] absolute top-[30%] left-0 h-[18rem] object-cover"
      /><img
        src="../assets/guys.jpg"
        alt="asian"
        class="w-[28rem] absolute bottom-0 right-0 h-[18rem] object-cover"
      />
    </div>
  </div>
</template>
