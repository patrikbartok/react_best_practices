import { Select, Option } from '@material-tailwind/react'
import { useSearchParams } from 'react-router-dom'

import { useArtworks } from '../api/getArtworks'

import { ArtworkListItem } from './ArtworkListItem'

import { LoadingSpinner } from '@/components/Elements/Spinner'
import { Head } from '@/components/Head'
import { PaginationControl } from '@/components/Pagination'

export const ArtworkList = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const paginationPage = searchParams.get('page') || '1'
  const paginationLimit = searchParams.get('limit') || '25'
  const searchQueryString = searchParams.get('q') || ''
  const { data, isLoading } = useArtworks({
    page: paginationPage,
    limit: paginationLimit,
    q: searchQueryString
  })

  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set('q', e.target.value)
    setSearchParams(searchParams)
  }

  const handleLimitChange = (e = '') => {
    searchParams.set('limit', e)
    setSearchParams(searchParams)
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={'Artworks List'} />

      <div className='w-6'>
        <Select value={paginationLimit} onChange={handleLimitChange} label='Items Per Page'>
          <Option value='25'>25</Option>
          <Option value='50'>50</Option>
          <Option value='100'>100</Option>
        </Select>
      </div>

      <PaginationControl
        pageCount={data?.pagination.total_pages || 0}
        selectedPage={Number(paginationPage)}
        setSelectedPage={handlePageChange}
      />

      <input value={searchQueryString} onChange={handleSearchChange} />

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
        {data?.data.map((artwork) => {
          return <ArtworkListItem key={artwork.id} artwork={artwork} />
        })}
      </div>
    </>
  )
}
