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
  <div v-if="posts.length">
    <div
      class="flex flex-col gap-4 py-[5rem] px-4 text-center items-center"
      v-if="posts.length > 0"
    >
      <img src="../assets/gql-Pc.jpg" alt="gql-logo" class="w-full sm:w-[60%]" />
      <h2 class="blinker-bold text-white text-[1.6rem]">{{ getPostByIndex(3)?.Title }}</h2>
      <p class="blinker-regular text-white leading-7">
        {{ getPostByIndex(3)?.Description }}
      </p>
    </div>
  </div>
</template>
