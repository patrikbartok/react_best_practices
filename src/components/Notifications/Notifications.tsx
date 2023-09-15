import { Notification } from './Notification'

import { selectNofitications, removeNotificationById } from '@/stores/notificationReduxSlice'
import { useAppSelector, useAppDispatch } from '@/stores/reduxStoreHooks'

export const Notifications = () => {
  const notifications = useAppSelector(selectNofitications)
  const dispatch = useAppDispatch()

  const handleDismissNotification = (id: string) => {
    console.log('handleDismissNotification()' + id)
    dispatch(removeNotificationById(id))
  }

  return (
    <div
      aria-live='assertive'
      className='z-50 flex flex-col fixed inset-0 space-y-4 items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start'
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={handleDismissNotification}
        />
      ))}
    </div>
  )
}
