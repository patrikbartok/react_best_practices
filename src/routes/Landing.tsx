import { Button, Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    //add authentication logic here, to either redirect to protected or public routes' root
    //we are navigating to our only existing route.
    navigate('/public/artworks/browse')
  }

  return (
    <div className='flex flex-col justify-items-center items-center h-screen'>
      <Typography variant='h2'>Welcome to Artworks!</Typography>
      <Typography variant='h6'>Continue as guest</Typography>
      <Button className='m-4' onClick={handleStart}>
        Get Started
      </Button>
    </div>
  )
}
