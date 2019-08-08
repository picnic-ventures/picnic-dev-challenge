import _ from 'idx'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { useCatListQuery } from '../__generated__/types'

export default function CatList({ navigation }: NavigationScreenProps) {
  const [{ data }] = useCatListQuery()
  const cats = _(data, _ => _.cats) || []
  return (
    <View style={CatList.styles.container}>
      {cats.map(cat => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              routeName: 'CatDetail',
              params: { id: cat.id },
            })
          }
          key={cat.id}
        >
          <Text>{cat.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
CatList.styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'teal',
  },
})
