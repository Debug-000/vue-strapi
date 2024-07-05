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
    <div class="flex flex-col gap-4 pb-[9rem] px-4" v-if="posts.length > 0">
      <h1 class="blinker-bold text-white text-[3.5rem]">{{ getPostByIndex(1)?.Title }}</h1>
      <div class="flex flex-col gap-4">
        <p class="blinker-regular text-white leading-7">
          {{ getPostByIndex(1)?.Description }}
        </p>
      </div>
      <h2 class="blinker-bold text-white text-[2.5rem] mt-8">{{ getPostByIndex(1)?.SubTitle }}</h2>
    </div>
  </div>
</template>
