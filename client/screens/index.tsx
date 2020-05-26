import { NavigationContainer, RouteProp } from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import React from 'react'
import CatDetail from './CatDetail'
import CatList from './CatList'

export type Routes = {
  CatList: undefined
  CatDetail: { id: string }
}

export type ScreenProps<RouteName extends keyof Routes> = {
  navigation: StackNavigationProp<Routes, RouteName>
  route: RouteProp<Routes, RouteName>
}

const Stack = createStackNavigator<Routes>()

export default function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="CatList" component={CatList} />
        <Stack.Screen name="CatDetail" component={CatDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
