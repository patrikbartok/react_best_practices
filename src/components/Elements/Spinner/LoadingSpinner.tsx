import { Spinner } from '@material-tailwind/react'

export const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Spinner className='h-12 w-12' />
    </div>
  )
}
