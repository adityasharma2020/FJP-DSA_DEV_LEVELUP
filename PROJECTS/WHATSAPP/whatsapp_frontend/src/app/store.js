import { combineReducers, configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import createFilter from 'redux-persist-transform-filter'

//slices
import userSlice from '../features/userSlice'

//saveUserOnlyFilter
const saveUserOnlyFilter = createFilter('user', ['user'])

//persist config
const persistConfig = {
  key: 'user',
  storage,
  whiteList: ['user'],
  transforms: [saveUserOnlyFilter],
}

// combine all reducers in it and then we can export this only.
const rootReducer = combineReducers({
  user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
})

export const persistor = persistStore(store)
