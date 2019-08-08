import _ from 'idx'
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { View, StyleSheet, Text } from 'react-native'
import { useCatDetailQuery } from '../__generated__/types'

export default function CatDetail({
  navigation: { state },
}: NavigationScreenProps<{ id: string }>) {
  const id = state.params.id
  const [{ data }] = useCatDetailQuery({ variables: { id } })
  const catName = _(data, _ => _.cat.name)
  return (
    <View style={CatDetail.styles.container}>
      <Text>
        This is where you'll need to implement the cat detail screen for{' '}
        {catName}.
      </Text>
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
