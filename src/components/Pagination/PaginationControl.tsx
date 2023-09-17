import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { IconButton, Typography } from '@material-tailwind/react'
import React from 'react'

export type PaginationControlProps = {
  pageCount: number
  selectedPage: number
  setSelectedPage: (page: number) => void
}

export const PaginationControl = ({
  pageCount,
  selectedPage,
  setSelectedPage
}: PaginationControlProps) => {
  const next = () => {
    setSelectedPage(selectedPage + 1)
  }

  const prev = () => {
    setSelectedPage(selectedPage - 1)
  }

  return (
    <div className='flex items-center gap-8'>
      <IconButton size='sm' variant='outlined' onClick={prev} disabled={selectedPage === 1}>
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
      </IconButton>
      <Typography color='gray' className='font-normal'>
        Page <strong className='text-gray-900'>{selectedPage}</strong> of{' '}
        <strong className='text-gray-900'>{pageCount}</strong>
      </Typography>
      <IconButton size='sm' variant='outlined' onClick={next} disabled={selectedPage === pageCount}>
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </IconButton>
    </div>
  )
}
