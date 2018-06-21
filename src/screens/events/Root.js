import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import {
  trackEvent,
  trackScreenWithCD,
  trackEventWithCDAndMetric
} from '../../Tracker';

class Events extends React.Component {
  static navigationOptions = {
    title: 'Events'
  };
  componentWillMount() {
    // log on initial mount
    trackScreenWithCD('Events', { UserId: '1', LoggedIn: 'logged in: YEH' });
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // log on repeat visits when screen comes into focus
      trackScreenWithCD('Events', { UserId: '1', LoggedIn: 'logged in: no' });
    }
  }
  onLogin = () => {
    trackEventWithCDAndMetric(
      'onboarding',
      'register',
      'create profile',
      {},
      { '1': 1 }
    );
  };
  onNotNow = () => {
    trackEvent('onboarding', 'register', 'not now');
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Generate a random login event and send to GA</Text>
        <View style={{ margin: 20 }}>
          <Button
            large
            icon={{ name: 'person' }}
            title="Create Profile Event"
            onPress={this.onLogin}
          />
          <Button
            large
            icon={{ name: 'person' }}
            title="Not Now Event"
            onPress={this.onNotNow}
          />
        </View>
      </View>
    );
  }
}

export default withNavigationFocus(Events);
