import _ from 'idx'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useCatListQuery } from '../__generated__/types'

export default function CatList() {
  const [{ data }] = useCatListQuery()
  const cats = _(data, _ => _.cats) || []
  return (
    <View style={CatList.styles.container}>
      {cats.map(cat => (
        <View key={cat.id}>
          <Text>{cat.name}</Text>
        </View>
      ))}
    </View>
  )
}
CatList.styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
