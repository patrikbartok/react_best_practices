import { useQuery } from '@tanstack/react-query'

import { ArtworkDetailsApiRequestType, ArtworkDetailsQueryFields } from '../types'

import { axios } from '@/lib/axios'
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query'

export const getArtwork = (artworkId: number): Promise<ArtworkDetailsApiRequestType> => {
  const queryParams = {
    fields: ArtworkDetailsQueryFields
  }
  return axios.get(`/artworks/${artworkId}`, { params: queryParams })
}

type QueryFnType = typeof getArtwork

export const useArtwork = (artworkId: number, config?: QueryConfig<QueryFnType>) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['artwork', artworkId],
    queryFn: () => getArtwork(artworkId)
  })
}
