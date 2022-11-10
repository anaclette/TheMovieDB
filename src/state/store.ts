import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {moviesApi} from '../state/movies';
import {tvShowsApi} from '../state/tvshows';
// import i18nSlice from '../services/i18n/i18nSlice';
import {trendyContentApi} from './trendy';
import {castMemberApi} from './cast';
import {searchApi} from './search';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    moviesApi.reducerPath,
    tvShowsApi.reducerPath,
    trendyContentApi.reducerPath,
    castMemberApi.reducerPath,
    searchApi.reducerPath,
  ],
};

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  [tvShowsApi.reducerPath]: tvShowsApi.reducer,
  [trendyContentApi.reducerPath]: trendyContentApi.reducer,
  [castMemberApi.reducerPath]: castMemberApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  // i18nSlice,
});

const reduxDebugger = require('redux-flipper').default();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      moviesApi.middleware,
      tvShowsApi.middleware,
      trendyContentApi.middleware,
      castMemberApi.middleware,
      searchApi.middleware,
      reduxDebugger,
    ]),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {persistor, store};
