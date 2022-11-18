# Movies app [WIP]

Movies and tv shows app using The Movie DB API. It has been made with practising purposes and I've implemented features such as carousel, accordion, modal, search bar, language switching buttons, animated layout and RTK query for the very first time. It still has some features ahead to be taken care of along with some warnings and issues that need to be tackled. Thus it is still a work in progress.

## Built with

<div align='center' width='100%'>
<img src="/src/assets/images/RN_logo.webp" width="110" alt="React Native logo"/>
<img src="/src/assets/images/TS_logo.png" width="70" alt="Typescript logo"/>
<img src="/src/assets/images/Redux_logo.jpeg" width="110" alt="Redux logo"/>
<img src="/src/assets/images/JS_logo.png" width="70" alt="Javascript logo"/>
</div>
</br>

### Implemented libraries

For basic structure:

- react-navigation/stack
- react-native-gesture-handler
- react-navigation/native
- react-native-screens
- react-native-safe-area-context
- react-native-size-matters

For state handling and api requests:

- reduxjs/toolkit
- react-native-async-storage/async-storage
- redux-persist

For carousel feature:

- react-native-snap-carousel@4.0.0-beta.6
- @types/react-native-snap-carousel
- deprecated-react-native-prop-types

For icons:

- react-native-vector-icons
- @types/react-native-vector-icons

For currency conversion:

- currency-formatter
- @types/currency-formatter

For tabs:

- @react-navigation/material-top-tabs
- react-native-tab-view
- react-native-pager-view

For linear gradient animation:

- react-native-linear-gradient
- react-native-image-colors

For locale language translations:

- i18next
- react-i18next

For debugging:

- react-native-flipper
- redux-flipper

For debouncing api requests:

- lodash
- @types/lodash.debounce

### How to launch

Clone the repo. Once in its local path, run `yarn` and then `cd ios ; pod install ; cd ..`. You should be fine then to launch it with either `yarn ios` or `yarn android` according to your device.
