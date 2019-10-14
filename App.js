import Register from './Register';
import Profile from './Profile';
import { createStackNavigator } from 'react-navigation-stack';

const screen = createStackNavigator({
  Register: {
    screen: Register
  },
  Profile: {
    screen: Profile
  }
})