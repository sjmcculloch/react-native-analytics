import { createStackNavigator } from 'react-navigation';
import NavigationOptions from '../../navigation/NavigationOptions';
import Root from './Root';

const EventStack = createStackNavigator(
  {
    EventHome: Root
  },
  {
    initialRouteName: 'EventHome',
    navigationOptions: NavigationOptions
  }
);

export default EventStack;
