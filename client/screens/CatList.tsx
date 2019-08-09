import _ from 'idx'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationScreenProps, ScrollView } from 'react-navigation'
import { useCatListQuery, Cat } from '../__generated__/types'
import * as constants from '../constants'

export default function CatList({ navigation }: NavigationScreenProps) {
  const [{ data }] = useCatListQuery()
  const cats = _(data, _ => _.cats) || []
  return (
    <ScrollView contentContainerStyle={CatList.styles.container}>
      {cats.map(cat => (
        <CatCard
          key={cat.id}
          cat={cat}
          onPress={id =>
            navigation.navigate({
              routeName: 'CatDetail',
              params: { id },
            })
          }
        />
      ))}
    </ScrollView>
  )
}
CatList.styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function CatCard({
  cat,
  onPress,
}: {
  cat: Cat
  onPress: (catId: string) => void
}) {
  return (
    <TouchableOpacity onPress={() => onPress(cat.id)}>
      {cat.image != null ? (
        <Image source={{ uri: imageUrl(cat.image), width: 100, height: 100 }} />
      ) : null}
      <Text style={CatCard.styles.fontExample}>{cat.name}</Text>
    </TouchableOpacity>
  )
}
CatCard.styles = StyleSheet.create({
  fontExample: {
    fontFamily: 'Circular Book',
    fontSize: 18,
  },
})

// In a real app, the server should send whole URLs, not just paths.
// We're taking a bit of a shortcut here, because we don't know the exact URL
// that the dev machine will have on the server side.
function imageUrl(path: string) {
  return `${constants.serverUrl}${path}`
}
