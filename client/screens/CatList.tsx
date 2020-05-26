import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { ScreenProps } from '.'
import * as constants from '../constants'
import { Cat, useCatListQuery } from '../__generated__/types'

export default function CatList({ navigation }: ScreenProps<'CatList'>) {
  const [{ data }] = useCatListQuery()
  const cats = data?.cats ?? []
  return (
    <ScrollView contentContainerStyle={CatList.styles.container}>
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
          onPress={(id) => navigation.navigate('CatDetail', { id })}
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
