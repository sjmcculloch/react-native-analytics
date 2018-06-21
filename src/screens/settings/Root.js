import React from 'react';
import { Text, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { trackScreen } from '../../Tracker';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };
  componentWillMount() {
    // log on initial mount
    trackScreen('Settings');
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // log on repeat visits when screen comes into focus
      trackScreen('Settings');
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings.{this.props.analyticsMode}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  analyticsMode: state.setting.analyticsMode
});

export default compose(
  connect(mapStateToProps),
  withNavigationFocus
)(Settings);
