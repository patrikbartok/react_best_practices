import { useQuery } from '@tanstack/react-query'

import { ArtworkListApiRequestType, ArtworkListItemQueryFields } from '../types'

import { axios } from '@/lib/axios'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

export const getArtworks = (
  paginationOptions: Omit<UseArtworksParams, 'config'>
): Promise<ArtworkListApiRequestType> => {
  const queryParams = {
    fields: ArtworkListItemQueryFields,
    page: paginationOptions.page,
    limit: paginationOptions.limit,
    q: paginationOptions.q
  }
  return axios.get('/artworks/search', { params: queryParams })
}

type QueryFnType = typeof getArtworks

export type UseArtworksParams = {
  page: string
  limit: string
  q: string
  config?: QueryConfig<QueryFnType>
}

export const useArtworks = ({ page, limit, q, config }: UseArtworksParams) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['artworks', page, limit, q],
    queryFn: () => getArtworks({ page, limit, q })
  })
}
