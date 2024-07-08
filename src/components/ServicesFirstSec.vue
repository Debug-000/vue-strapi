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
    <div class="w-full px-4 text-center" v-if="posts.length">
      <div v-if="posts.length > 0">
        <h1 class="blinker-bold text-[#040e56] text-[3.5rem]">{{ getPostByIndex(0)?.Title }}</h1>
        <p
          class="blinker-regular text-[#9b9b9b] m-auto text-[1.1rem] leading-7 mt-4 w-full lg:w-[60rem]"
        >
          {{ getPostByIndex(0)?.Description }}
        </p>
      </div>
    </div>
  </div>
</template>
