import React from 'react';
import { StatusBar, View } from 'react-native';
import { openTracker, trackScreen } from './Tracker';

import HomeStack from './screens/home/Stack';
import EventStack from './screens/events/Stack';
import ShopStack from './screens/shop/Stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

openTracker();

const RootNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Events: EventStack,
    Shop: ShopStack
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

export default (App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <RootNavigator />
  </View>
));
