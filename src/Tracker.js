import { GoogleTagManager } from 'react-native-google-analytics-bridge';

export const openTracker = () => {
  GoogleTagManager.openContainerWithId('GTM-5MHQZ87');
};

export const trackEvent = eventObject => {
  GoogleTagManager.pushDataLayerEvent(eventObject);
};

export const trackScreen = screenName => {
  trackEvent({
    event: 'screenLoad',
    screenName: screenName
  });
};
