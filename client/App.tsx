import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { createClient, Provider } from 'urql'
import * as constants from './constants'
import Screens from './screens'

// Generates a new user id every time you open the app. Ensures that actions
// made in a single session are matched to the same user, but the user id will
// change every time the app is opened again. In a real app, you would get a
// token from the server, and store it in the keychain.
const userId = `user_${String(Math.random()).slice(2, 8)}`

const client = createClient({
  url: `${constants.serverUrl}/graphql`,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${userId}`,
    },
  },
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
