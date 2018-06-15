import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import { trackEvent, trackScreen } from '../../Tracker';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Events'
  };
  componentWillMount() {
    // log on initial mount
    trackScreen('Events');
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // log on repeat visits when screen comes into focus
      trackScreen('Events');
    }
  }
  onLogin = () => {
    trackEvent({
      event: 'loginSuccess',
      country: 'Australia'
    });
    console.log('loginSuccess');
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Generate a random login event and send to GTM</Text>
        <View style={{ margin: 20 }}>
          <Button
            large
            icon={{ name: 'person' }}
            title="Send Login Success Event"
            onPress={this.onLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    padding: 10,
    backgroundColor: 'blue',
    width: '100%'
  }
};

export default withNavigationFocus(Home);
