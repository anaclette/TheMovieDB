import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationController from './src/navigation/NavigationController';
import {GradientProvider} from './src/context/GradientContext';
// import {Provider} from 'react-redux';
// import {store} from './src/state/store';

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <GradientProvider>
        <NavigationController />
      </GradientProvider>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
