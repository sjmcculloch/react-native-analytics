import { AppRegistry, YellowBox } from 'react-native';
// remove react navigation warning
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);
import App from './src/App';
AppRegistry.registerComponent('rnanalytics', () => App);
