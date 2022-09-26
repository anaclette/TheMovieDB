module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
  // The following script is to prevent XCode from adding all the fonts to the Build Phases, Copy Pods Resources when autolinking, that would end up in my bundle.
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
