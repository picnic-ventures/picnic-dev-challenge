import Constants from 'expo-constants'
import React from 'react'
import url from 'url'
import { createClient, Provider } from 'urql'
import Screens from './screens'

const { hostname } = url.parse(`http://${Constants.manifest.debuggerHost}`)
const client = createClient({
  url: `http://${hostname}:4000/graphql`,
  fetchOptions: { credentials: 'include' },
})

export default function App() {
  return (
    <Provider value={client}>
      <Screens />
    </Provider>
  )
}
