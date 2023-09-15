import { NavLink } from 'react-router-dom'

import { ArtworkListItemType } from '../types'

type ArtworkItemProps = {
  artwork: ArtworkListItemType
}

export const ArtworkListItem = ({ artwork }: ArtworkItemProps) => {
  return (
    <NavLink style={{ textDecoration: 'none' }} to={`./${artwork.id}`}>
      <div className='flex flex-col items-center rounded-lg bg-gray-100 p-4 hover:drop-shadow-lg'>
        <div className='font-bold mb-4 truncate max-w-[100%]'>{artwork.title}</div>
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,300/0/default.jpg`}
          alt={`Image for ${artwork.title}`}
        />
      </div>
    </NavLink>
  )
}
