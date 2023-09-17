import { StarIcon } from '@heroicons/react/20/solid'
import { useParams } from 'react-router-dom'

import { useArtwork } from '../api/getArtwork'

import { LoadingSpinner } from '@/components/Elements/Spinner'
import { Head } from '@/components/Head'
import {
  addFavouriteArtwork,
  removeFavouriteArtworkById,
  selectFavouriteArtworks
} from '@/stores/favouriteArtworksReduxSlice'
import { useAppDispatch, useAppSelector } from '@/stores/reduxStoreHooks'

export const ArtworkDetails = () => {
  const { artworkIdParam } = useParams()
  const artworkId = Number(artworkIdParam)
  const { data, isLoading } = useArtwork(artworkId)
  const favouriteArtworks = useAppSelector(selectFavouriteArtworks)
  const favourite = favouriteArtworks.find((favArtwork) => favArtwork.id === artworkId)
  const isFavourite = !!favourite
  const dispatch = useAppDispatch()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!data) {
    return null
  }

  const toggleFavorite: React.MouseEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (isFavourite) {
      dispatch(removeFavouriteArtworkById(artworkId))
    } else {
      dispatch(
        addFavouriteArtwork({
          id: data.data.id,
          image_id: data.data.image_id,
          title: data.data.title
        })
      )
    }
  }

  return (
    <div className='flex flex-col items-center w-screen h-screen p-6'>
      <div className='flex flex-col items-center rounded-lg bg-gray-100 p-4'>
        <Head title={'Artworks Details'} />
        <div className='font-bold'>{data.data.title}</div>
        <div>{data.data.artist_display}</div>
        <div>{data.data.department_title}</div>
        <div className='relative m-3'>
          <StarIcon
            className={`absolute top-4 right-4 h-10 text-white active:text-yellow-200 cursor-pointer ${
              isFavourite ? 'text-yellow-500' : ''
            }`}
            onClick={toggleFavorite}
          />
          <img
            src={`https://www.artic.edu/iiif/2/${data.data.image_id}/full/,843/0/default.jpg`}
            alt={`Image for ${data.data.title}`}
          />
        </div>
      </div>
    </div>
  )
}
