import { GoogleTagManager } from 'react-native-google-analytics-bridge';

import { tracker } from './App';

export const trackScreen = screenName => {
  tracker.trackScreenView('Tracker = ' + screenName);
};

export const trackScreenWithCD = (screenName, dimensions) => {
  tracker.trackScreenViewWithCustomDimensionValues(screenName, dimensions);
};

export const trackEvent = (category, action, label) => {
  tracker.trackEvent(category, action, { label: label });
};

export const trackEventWithCDAndMetric = (
  category,
  action,
  label,
  dimensions,
  metric
) => {
  tracker.trackEventWithCustomDimensionAndMetricValues(
    category,
    action,
    { label: label },
    dimensions,
    metric
  );
};
