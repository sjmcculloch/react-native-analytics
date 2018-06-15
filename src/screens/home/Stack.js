import { createStackNavigator } from 'react-navigation';
import Root from './Root';

const HomeStack = createStackNavigator(
  {
    Home: Root
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4E9766'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default HomeStack;
