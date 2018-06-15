import React from 'react';
import { Text, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Button } from 'react-native-elements';
import { trackEvent, trackScreen } from '../../Tracker';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Shop'
  };
  componentWillMount() {
    // log on initial mount
    trackScreen('Shop');
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // log on repeat visits when screen comes into focus
      trackScreen('Shop');
    }
  }
  onProductClick = () => {
    console.log('onproductclick');
    trackEvent({
      event: 'productClick',
      ecommerce: {
        click: {
          actionField: { list: 'Search Results' }, // Optional list property.
          products: [
            {
              name: 'Product Name', // Name or ID is required.
              id: 'x',
              price: 50
              /*
            'brand': productObj.brand,
            'category': productObj.cat,
            'variant': productObj.variant,
            'position': productObj.position
            */
            }
          ]
        }
      }
    });
    this.props.navigation.navigate('Purchase');
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>Generates a random product click and sends to GTM</Text>
        <View style={{ margin: 20 }}>
          <Button
            large
            icon={{ name: 'person' }}
            title="Generate EE Product Click"
            onPress={this.onProductClick}
          />
        </View>
      </View>
    );
  }
}

export default withNavigationFocus(Home);
