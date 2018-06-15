import React from 'react';
import { Text, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { trackScreen } from '../../Tracker';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  componentWillMount() {
    // log on initial mount
    trackScreen('Home');
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // log on repeat visits when screen comes into focus
      trackScreen('Home');
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to the React Native GTM sample app.</Text>
      </View>
    );
  }
}

export default withNavigationFocus(Home);
