import { useMutation } from '@tanstack/react-query'

import { Artwork } from '../types'

import { axios } from '@/lib/axios'
import { MutationConfig, queryClient } from '@/lib/react-query'
import { addNotification } from '@/stores/notificationReduxSlice'
import { store } from '@/stores/reduxStore'

export const createArtwork = (data: Artwork): Promise<Artwork> => {
  return axios.post(`/artworks`, data)
}

export const useCreateArtwork = (config: MutationConfig<typeof createArtwork> = {}) => {
  return useMutation({
    onMutate: async (newArtwork) => {
      await queryClient.cancelQueries(['artworks'])

      const previousArtworks = queryClient.getQueryData<Artwork[]>(['artworks'])

      queryClient.setQueryData(['artworks'], [...(previousArtworks || []), newArtwork])

      return { previousArtworks }
    },
    onError: (_, __, context: any) => {
      if (context?.previousArtworks) {
        queryClient.setQueryData(['artworks'], context.previousArtworks)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['artworks'])
      store.dispatch(
        addNotification({
          type: 'success',
          title: 'Artwork Created'
        })
      )
    },
    ...config,
    mutationFn: createArtwork
  })
}
