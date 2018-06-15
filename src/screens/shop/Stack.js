import { createStackNavigator } from 'react-navigation';

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

export default ShopStack;
