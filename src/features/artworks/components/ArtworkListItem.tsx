import { StarIcon } from '@heroicons/react/20/solid'
import { Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

import { ArtworkListItemType } from '../types'

import {
  addFavouriteArtwork,
  removeFavouriteArtworkById,
  selectFavouriteArtworks
} from '@/stores/favouriteArtworksReduxSlice'
import { useAppDispatch, useAppSelector } from '@/stores/reduxStoreHooks'

type ArtworkItemProps = {
  artwork: ArtworkListItemType
}

export const ArtworkListItem = ({ artwork }: ArtworkItemProps) => {
  const favouriteArtworks = useAppSelector(selectFavouriteArtworks)
  const favourite = favouriteArtworks.find((favArtwork) => favArtwork.id === artwork.id)
  const isFavourite = !!favourite

  const dispatch = useAppDispatch()

  const toggleFavorite = () => {
    if (isFavourite) {
      dispatch(removeFavouriteArtworkById(artwork.id))
    } else {
      console.log('remove')
      dispatch(addFavouriteArtwork(artwork))
    }
  }

  return (
    <NavLink to={`./${artwork.id}`}>
      <figure className='relative h-96 w-full'>
        <img
          className='h-full w-full rounded-xl object-cover object-center hover:shadow-xl hover:shadow-blue-gray-900/50'
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,300/0/default.jpg`}
          alt={`Image for ${artwork.title}`}
        />
        <StarIcon
          className={`absolute top-4 right-4 h-10 text-white ${
            isFavourite ? 'text-yellow-500 hover:text-white' : 'hover:text-yellow-500'
          }`}
          onClick={toggleFavorite}
        />
        <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
          <Typography variant='h6' color='blue-gray' className='truncate'>
            {artwork.title}
          </Typography>
          <div>
            <Typography variant='h5' color='blue-gray'>
              {''}
            </Typography>
            <Typography color='gray' className='mt-2 font-normal'>
              {''}
            </Typography>
          </div>
        </figcaption>
      </figure>
    </NavLink>
  )
}
