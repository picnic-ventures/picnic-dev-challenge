import React from 'react'
import { createClient, Provider } from 'urql'
import * as constants from './constants'
import Screens from './screens'

const client = createClient({
  url: `${constants.serverUrl}/graphql`,
  fetchOptions: { credentials: 'include' },
})

export default function App() {
  return (
    <Provider value={client}>
      <Screens />
    </Provider>
  )
}
