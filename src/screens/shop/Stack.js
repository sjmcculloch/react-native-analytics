import { createStackNavigator } from 'react-navigation';
import NavigationOptions from '../../navigation/NavigationOptions';

import Root from './Root';
import Purchase from './Purchase';

const ShopStack = createStackNavigator(
  {
    ShopHome: {
      screen: Root
    },
    ShopPurchase: Purchase
  },
  {
    initialRouteName: 'ShopHome',
    navigationOptions: NavigationOptions
  }
);

export default ShopStack;
