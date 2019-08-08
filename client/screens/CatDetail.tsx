import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { View, StyleSheet, Text } from 'react-native'
import { useCatDetailQuery } from '../__generated__/types'

export default function CatDetail({
  navigation: { state },
}: NavigationScreenProps<{ id: string }>) {
  const id = state.params.id
  const [{ data }] = useCatDetailQuery({ variables: { id } })
  return (
    <View style={CatDetail.styles.container}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}
CatDetail.styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
