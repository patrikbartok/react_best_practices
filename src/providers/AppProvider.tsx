import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { LoadingSpinner } from '@/components/Elements/Spinner'
import { ErrorFallback } from '@/components/ErrorFallback'
import { Notifications } from '@/components/Notifications'
import { queryClient } from '@/lib/react-query'
import { store } from '@/stores/reduxStore'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className='flex items-center justify-center w-screen h-screen'>
          <LoadingSpinner />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
              <Notifications />
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                {/*<AuthProvider>*/}
                <BrowserRouter>{children}</BrowserRouter>
                {/*</AuthProvider>*/}
              </ErrorBoundary>
            </QueryClientProvider>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
