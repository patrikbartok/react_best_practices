import { Route, Routes } from 'react-router-dom'

import { ArtworkDetails } from '../components/ArtworkDetails'
import { ArtworkList } from '../components/ArtworkList'
import { FavouriteArtworkList } from '../components/FavouriteArtworkList'

import { NavbarSimple } from '@/components/Navbar'

export const ArtworksPageRoutes = () => {
  return (
    <>
      <NavbarSimple
        title='Artworks'
        navLinks={[
          { label: 'Browse', url: 'browse' },
          { label: 'Favourites', url: 'favourites' }
        ]}
      />
      <Routes>
        <Route path='browse' element={<ArtworkList />} />
        <Route path='browse/:artworkIdParam' element={<ArtworkDetails />} />
        <Route path='favourites' element={<FavouriteArtworkList />} />
      </Routes>
    </>
  )
}
