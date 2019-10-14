import Register from './Register';
import Profile from './Profile';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const screen = createStackNavigator({
  Register: {
    screen: Register
  },
  Profile: {
    screen: Profile
  }
},{
  headerMode:'none'
})

const renderScreen = createAppContainer(screen)

export default renderScreen;