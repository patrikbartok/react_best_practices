import { Route, Routes } from 'react-router-dom'

import { ArtworkDetails } from '../components/ArtworkDetails'
import { ArtworkList } from '../components/ArtworkList'

export const ArtworksPageRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<ArtworkList />} />
      <Route path=':artworkId' element={<ArtworkDetails />} />
    </Routes>
  )
}
