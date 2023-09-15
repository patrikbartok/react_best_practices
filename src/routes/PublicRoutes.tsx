import { Navigate, Route, Routes } from 'react-router-dom'

import { lazyImport } from '@/utils/lazyImport'
const { ArtworksPageRoutes } = lazyImport(() => import('@/features/artworks'), 'ArtworksPageRoutes')

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='artworks/*' element={<ArtworksPageRoutes />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
