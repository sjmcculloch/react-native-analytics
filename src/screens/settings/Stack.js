import { createStackNavigator } from 'react-navigation';
import NavigationOptions from '../../navigation/NavigationOptions';
import Root from './Root';

const SettingStack = createStackNavigator(
  {
    SettingHome: Root
  },
  {
    initialRouteName: 'SettingHome',
    navigationOptions: NavigationOptions
  }
);

export default SettingStack;
