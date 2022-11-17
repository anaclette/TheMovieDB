import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationController from './src/navigation/NavigationController';
import SplashScreen from './src/components/SplashScreen';
import {Provider} from 'react-redux';
import {store, persistor} from './src/state/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SplashScreen>
          <NavigationContainer>
            <NavigationController />
          </NavigationContainer>
        </SplashScreen>
      </PersistGate>
    </Provider>
  );
};

export default App;
