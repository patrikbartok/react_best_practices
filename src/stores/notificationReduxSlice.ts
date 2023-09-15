import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'

import { RootState } from '@/stores/reduxStore'

type Notification = {
  id: string
  type: 'info' | 'warning' | 'success' | 'error'
  title: string
  message?: string
}

const initialState: Notification[] = []

const notificationReduxSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      state.push({ ...action.payload, id: nanoid() })
    },
    removeNotificationById: (state, action: PayloadAction<string>) => {
      return state.filter((notification) => notification.id !== action.payload)
    }
  }
})

export const { addNotification, removeNotificationById } = notificationReduxSlice.actions
export const selectNofitications = (state: RootState) => state.notifications
export default notificationReduxSlice.reducer
