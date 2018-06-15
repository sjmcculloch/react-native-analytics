import React from 'react';
import { Button, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { trackScreen } from '../../Tracker';

class Purchase extends React.Component {
  static navigationOptions = {
    title: 'Purchase'
  };
  componentWillMount() {
    // log on initial mount
    trackScreen('Purchase');
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // log on repeat visits when screen comes into focus
      trackScreen('Purchase');
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Make Purchase"
          onPress={() => this.props.navigation.navigate('EventHome')}
          backgroundColor="#3fffff"
        />
      </View>
    );
  }
}

export default withNavigationFocus(Purchase);
