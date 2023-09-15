import React from 'react'
import { useSearchParams } from 'react-router-dom'

import { useArtworks } from '../api/getArtworks'

import { ArtworkListItem } from './ArtworkListItem'

import { Spinner } from '@/components/Elements/Spinner'
import { Head } from '@/components/Head'
import { PaginationControl } from '@/components/Pagination'

export const ArtworkList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const paginationPage = Number(searchParams.get('page')) || 1
  const paginationLimit = Number(searchParams.get('limit')) || 25
  const searchQueryString = searchParams.get('q') || ''

  const { data, isLoading } = useArtworks({
    page: paginationPage,
    limit: paginationLimit,
    q: searchQueryString
  })

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('limit', e.target.value)
    setSearchParams(searchParams)
  }

  const handlePageChange = (page: string) => {
    searchParams.set('page', page)
    setSearchParams(searchParams)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set('q', e.target.value)
    setSearchParams(searchParams)
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <Head title={'Artworks List'} />
      <select value={paginationLimit} onChange={handleLimitChange}>
        <option value='25'>25</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </select>

      <PaginationControl
        pageCount={100}
        selectedPage={paginationPage}
        setSelectedPage={handlePageChange}
      />

      <input value={searchQueryString} onChange={handleSearchChange} />

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {data?.data.map((artwork) => {
          return <ArtworkListItem key={artwork.id} artwork={artwork} />
        })}
      </div>
    </>
  )
}
