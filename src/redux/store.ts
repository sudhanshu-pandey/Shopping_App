import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import cartReducer from './slice/CartSlice';
import favouriteReducer from './slice/FavouriteSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
};

const FavouritePersistConfig = {
  key: 'favourite',
  storage: AsyncStorage,
};

const CartPersistedReducer = persistReducer(CartPersistConfig, cartReducer);
const FavouritePersistedReducer = persistReducer(
  FavouritePersistConfig,
  favouriteReducer,
);

export const store = configureStore({
  reducer: {
    cart: CartPersistedReducer,
    Favourite: FavouritePersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
