import { createStackNavigator } from 'react-navigation';
import Root from './Root';

const EventStack = createStackNavigator(
  {
    EventHome: Root
  },
  {
    initialRouteName: 'EventHome',
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

export default EventStack;
