<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { computed } from 'vue'

interface Post {
  Title: string
  Description: string
  Descript: string
  Desc: string
  SecondHeading: string
}

const firstComp = gql`
  query {
    homePosts {
      data {
        attributes {
          Title
          Description
          Descript
          Desc
          SecondHeading
        }
      }
    }
  }
`

const { result, loading, error } = useQuery(firstComp)

const posts = computed(() => {
  if (loading.value || error.value) return []
  return result.value?.homePosts.data.map((post: { attributes: any }) => post.attributes) ?? []
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
      <div class="flex flex-col gap-4 py-[9rem] px-4" v-if="posts.length > 0">
        <h1 class="blinker-bold text-white text-[3.5rem]">
          {{ getPostByIndex(1)?.Title }}
        </h1>
        <div class="flex flex-col gap-4">
          <p class="blinker-regular text-white leading-7">
            {{ getPostByIndex(1)?.Description }}
          </p>
          <p class="blinker-regular text-white leading-7">
            {{ getPostByIndex(1)?.Desc }}
          </p>
          <p class="blinker-regular text-white leading-7">
            {{ getPostByIndex(1)?.Descript }}
          </p>
        </div>
        <h2 class="blinker-semibold text-white text-[1.6rem]">
          {{ getPostByIndex(1)?.SecondHeading }}
        </h2>
      </div>
    </div>
  </div>
</template>
