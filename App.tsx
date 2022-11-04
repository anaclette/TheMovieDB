import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationController from './src/navigation/NavigationController';
import SplashScreen from './src/components/SplashScreen';
import {Provider} from 'react-redux';
import {store, persistor} from './src/state/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/locale/config';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <SplashScreen>
            <NavigationContainer>
              <NavigationController />
            </NavigationContainer>
          </SplashScreen>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
