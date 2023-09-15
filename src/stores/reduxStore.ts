import { configureStore } from '@reduxjs/toolkit'

import notificationsReducer from './notificationReduxSlice'

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
