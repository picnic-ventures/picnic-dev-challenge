import React, { useEffect } from 'react'
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
  const [{ data, error }] = useCatListQuery()
  useEffect(() => {
    if (error != null) console.warn(error)
  }, [error])
  const cats = data?.cats ?? []
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <Text style={styles.fontExample}>{cat.name}</Text>
    </TouchableOpacity>
  )
}

// In a real app, the server should send whole URLs, not just paths.
// We're taking a bit of a shortcut here, because we don't know the exact URL
// that the dev machine will have on the server side.
function imageUrl(path: string) {
  return `${constants.serverUrl}${path}`
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontExample: {
    fontFamily: 'Circular Book',
    fontSize: 18,
  },
})
