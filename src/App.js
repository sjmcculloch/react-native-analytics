import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

import rootReducer from './reducers';
import RootNavigator from './navigation/RootNavigator';

export const tracker = new GoogleAnalyticsTracker('UA-102295230-2', {
  UserId: 1,
  LoggedIn: 2
});
console.log(tracker);
const store = createStore(rootReducer);

export default (App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </View>
  </Provider>
));
