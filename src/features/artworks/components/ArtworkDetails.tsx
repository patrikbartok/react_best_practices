import { useParams } from 'react-router-dom'

import { useArtwork } from '../api/getArtwork'

import { Spinner } from '@/components/Elements/Spinner'
import { Head } from '@/components/Head'

export const ArtworkDetails = () => {
  const { artworkId } = useParams()
  const { data, isLoading } = useArtwork(Number(artworkId))

  if (isLoading) {
    return <Spinner />
  }

  if (!data) {
    return null
  }

  return (
    <div className='flex flex-col items-center w-screen h-screen p-6'>
      <div className='flex flex-col items-center rounded-lg bg-gray-100 p-4'>
        <Head title={'Artworks Details'} />
        <div className='font-bold'>{data.data.title}</div>
        <div>{data.data.artist_display}</div>
        <div>{data.data.department_title}</div>
        <div className='w-fit bg-red-800 m-3'>
          <img
            src={`https://www.artic.edu/iiif/2/${data.data.image_id}/full/,843/0/default.jpg`}
            alt={`Image for ${data.data.title}`}
          />
        </div>
      </div>
    </div>
  )
}
