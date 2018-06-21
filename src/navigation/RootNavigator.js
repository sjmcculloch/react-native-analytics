import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from '../screens/home/Stack';
import EventStack from '../screens/events/Stack';
import ShopStack from '../screens/shop/Stack';
import SettingStack from '../screens/settings/Stack';

const RootNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Events: EventStack,
    Shop: ShopStack,
    Settings: SettingStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Events') {
          iconName = `ios-star${focused ? '' : '-outline'}`;
        } else if (routeName === 'Shop') {
          iconName = `ios-card${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#f6b333',
      inactiveTintColor: '#b1afae',
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: '#3D3834'
      }
    }
  }
);

export default RootNavigator;
