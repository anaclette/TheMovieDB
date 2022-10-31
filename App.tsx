import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationController from './src/navigation/NavigationController';
import SplashScreen from './src/components/SplashScreen';
import {Provider} from 'react-redux';
import {store} from './src/state/store';

const App = () => {
  return (
    <Provider store={store}>
      <SplashScreen>
        <NavigationContainer>
          <NavigationController />
        </NavigationContainer>
      </SplashScreen>
    </Provider>
  );
};

export default App;
