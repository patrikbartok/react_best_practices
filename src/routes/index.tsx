import { Navigate, Route, Routes } from 'react-router-dom'

import { Landing } from './Landing'
import { PublicRoutes } from './PublicRoutes'

export const AppRoutes = () => {
  //add authentication logic if implemented, and return either protected or public routes

  //for now there is no root element, that shows on / before protected or public routes, like a welcome page, so we redirect to our only component.

  return (
    <Routes>
      <Route path='' element={<Landing />} />
      <Route path='public/*' element={<PublicRoutes />} />
      <Route path='*' element={<Navigate to='' />} />
    </Routes>
  )
}
