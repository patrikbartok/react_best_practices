import React from 'react'

export type PaginationControlProps = {
  pageCount: number
  selectedPage: number
  setSelectedPage: (page: string) => void
}

export const PaginationControl = ({
  pageCount,
  selectedPage,
  setSelectedPage
}: PaginationControlProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSelectedPage(e.target.value)
  }

  return (
    <>
      <input
        min='1'
        max={pageCount}
        type='number'
        value={selectedPage}
        onChange={handleInputChange}
      />
    </>
  )
}
