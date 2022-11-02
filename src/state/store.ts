import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {moviesApi} from '../state/movies';
import {tvShowsApi} from '../state/tvshows';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  [tvShowsApi.reducerPath]: tvShowsApi.reducer,
});

const reduxDebugger = require('redux-flipper').default();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([moviesApi.middleware, reduxDebugger]),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {persistor, store};
