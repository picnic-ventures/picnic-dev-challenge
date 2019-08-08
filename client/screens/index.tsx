import CatList from './CatList'
import CatDetail from './CatDetail'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const screens = createStackNavigator({
  CatList: { screen: CatList },
  CatDetail: { screen: CatDetail },
})

export default createAppContainer(screens)
