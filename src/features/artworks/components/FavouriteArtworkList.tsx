import { ArtworkListItem } from './ArtworkListItem'

import { Head } from '@/components/Head'
import { selectFavouriteArtworks } from '@/stores/favouriteArtworksReduxSlice'
import { useAppSelector } from '@/stores/reduxStoreHooks'

export const FavouriteArtworkList = () => {
  const favouriteArtworks = useAppSelector(selectFavouriteArtworks)
  if (favouriteArtworks.length === 0) {
    return (
      <>
        <Head title={'Favourite Artworks'} />
        <div>You have no favourite artworks.</div>
      </>
    )
  }

  return (
    <>
      <Head title={'Favourite Artworks'} />
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
        {favouriteArtworks.map((artwork) => {
          return <ArtworkListItem key={artwork.id} artwork={artwork} />
        })}
      </div>
    </>
  )
}
