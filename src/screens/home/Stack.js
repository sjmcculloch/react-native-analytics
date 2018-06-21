import { createStackNavigator } from 'react-navigation';
import NavigationOptions from '../../navigation/NavigationOptions';
import Root from './Root';

const HomeStack = createStackNavigator(
  {
    Home: Root
  },
  {
    initialRouteName: 'Home',
    navigationOptions: NavigationOptions
  }
);

export default HomeStack;
