<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

interface Post {
  Title: string
  SubTitle: string
  Description: string
  Descript: string
  Desc: string
  FirstTable: string
  SecondTable: string
  ThirdTable: string
}

const firstComp = gql`
  query {
    showcasePosts {
      data {
        attributes {
          Title
          SubTitle
          Description
          Descript
          Desc
          FirstTable
          SecondTable
          ThirdTable
        }
      }
    }
  }
`

const { result, loading, error } = useQuery(firstComp)

const posts = computed(() => {
  if (loading.value || error.value) return []
  return result.value?.showcasePosts.data.map((post: { attributes: any }) => post.attributes) ?? []
})

const getPostByIndex = (index: number): Post | undefined => {
  return posts.value[index]
}
</script>

<template>
  <p v-if="loading" class="text-white text-center">Loading...</p>
  <p v-if="error" class="text-white text-center">{{ error }} Something went wrong!</p>
  <div v-else>
    <div v-if="posts.length">
      <div class="flex flex-col gap-4 pb-[15rem] px-4" v-if="posts.length > 0">
        <h1 class="blinker-bold text-white text-[3.5rem]">{{ getPostByIndex(1)?.Title }}</h1>
        <div class="flex flex-col gap-4">
          <p class="blinker-regular text-white leading-7">
            {{ getPostByIndex(1)?.Description }}
          </p>
        </div>
        <h2 class="blinker-bold text-white text-[2.5rem] mt-8">
          {{ getPostByIndex(1)?.SubTitle }}
        </h2>

        <div class="mt-[7rem] w-[70%] m-auto hidden lg:block">
          <div class="border border-white"></div>
          <div class="flex justify-between items-center">
            <div class="border border-white h-[8rem]"></div>
            <div class="border border-white h-[13rem] mt-[-5rem]"></div>
            <div class="border border-white h-[8rem]"></div>
          </div>
        </div>
        <div
          class="flex lg:flex-row flex-col justify-between items-center lg:items-start gap-8 mt-20 lg:-mt-3 z-40"
        >
          <p
            class="w-[30rem] text-center bg-white hover:bg-[#CB9DC7] text-[#040E56] px-4 py-8 aspect-[2/0.8] lg:aspect-[2/0.9]"
          >
            {{ getPostByIndex(1)?.FirstTable }}
          </p>
          <p
            class="w-[30rem] text-center bg-white hover:bg-[#CB9DC7] text-[#040E56] px-4 py-8 aspect-[2/0.8] lg:aspect-[2/0.9]"
          >
            {{ getPostByIndex(1)?.SecondTable }}
          </p>
          <p
            class="w-[30rem] text-center bg-white hover:bg-[#CB9DC7] text-[#040E56] px-4 py-8 aspect-[2/0.8] lg:aspect-[2/0.9]"
          >
            {{ getPostByIndex(1)?.ThirdTable }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
