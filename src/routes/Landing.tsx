import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    //add authentication logic here, to either redirect to protected or public routes' root
    //we are navigating to our only existing route.
    navigate('/public/artworks')
  }

  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={handleStart}
    >
      {' '}
      Get Started{' '}
    </button>
  )
}
