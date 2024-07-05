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
  <div v-if="posts.length">
    <div v-if="posts.length > 0">
      <div class="md:flex-row flex-col flex justify-center items-start w-full gap-20 px-4">
        <div class="relative w-full md:w-[60%] max-w-[33rem]">
          <h2 class="blinker-semibold text-[1.6rem] text-[#497DFF]">
            {{ getPostByIndex(0)?.SubTitle }}
          </h2>
          <h1 class="blinker-bold text-[#040e56] text-[3.5rem] leading-[3.5rem] mt-4">
            {{ getPostByIndex(0)?.Title }}
          </h1>
        </div>
        <div class="flex flex-col gap-4">
          <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7">
            {{ getPostByIndex(0)?.Description }}
          </p>
          <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7">
            {{ getPostByIndex(0)?.Descript }}
          </p>
          <p class="blinker-regular text-[#9b9b9b] text-[1.1rem] leading-7">
            {{ getPostByIndex(0)?.Desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
