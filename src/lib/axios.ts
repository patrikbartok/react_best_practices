import AxiosStaticInstance, { InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/config'
import { addNotification } from '@/stores/notificationReduxSlice'
import { store } from '@/stores/reduxStore'
import tokenStorage from '@/utils/tokenStorage'

function authRequestInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  const token = tokenStorage.getToken()

  if (token) {
    config.headers.authorization = `${token}`
  }
  config.headers.Accept = 'application/json'

  return config
}

export const axios = AxiosStaticInstance.create({
  baseURL: API_URL
})

axios.interceptors.request.use(authRequestInterceptor)

axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log('error')
    const message = error.response?.data?.message || error.message
    store.dispatch(
      addNotification({
        type: 'error',
        title: 'Error',
        message
      })
    )

    return Promise.reject(error)
  }
)
