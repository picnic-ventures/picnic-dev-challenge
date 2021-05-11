import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { createClient, Provider } from 'urql'
import * as constants from './constants'
import Screens from './screens'

const client = createClient({
  url: `${constants.serverUrl}/graphql`,
  fetchOptions: { credentials: 'include' },
})

export default function App() {
  const [ready, setReady] = useState(false)
  if (!ready) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <Provider value={client}>
      <Screens />
    </Provider>
  )
}

async function loadFonts() {
  await Font.loadAsync({
    'Circular Black': require('./assets/fonts/lineto-circular-pro-black.ttf'),
    'Circular Book': require('./assets/fonts/lineto-circular-pro-book.ttf'),
    'Circular Medium': require('./assets/fonts/lineto-circular-pro-medium.ttf'),
  })
}
