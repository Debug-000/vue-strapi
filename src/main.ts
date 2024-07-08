import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp, h, provide } from 'vue'
import App from './App.vue'
import router from './router'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql'
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

app.use(router)

app.mount('#app')
