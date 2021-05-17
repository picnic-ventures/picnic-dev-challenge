import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenProps } from '.'
import { useCatDetailQuery } from '../__generated__/types'

export default function CatDetail({ route }: ScreenProps<'CatDetail'>) {
  const id = route.params.id
  const [{ data }] = useCatDetailQuery({ variables: { id } })
  const catName = data?.cat?.name
  return (
    <View style={styles.container}>
      <Text>
        This is where you will need to implement the cat detail screen for{' '}
        {catName}.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
