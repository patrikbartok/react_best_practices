import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ArtworkListItemType } from '@/features/artworks'
import { RootState } from '@/stores/reduxStore'

const initialState: ArtworkListItemType[] = []

const favouriteArtworkReduxSlice = createSlice({
  name: 'favouriteArtworks',
  initialState,
  reducers: {
    addFavouriteArtwork: (state, action: PayloadAction<ArtworkListItemType>) => {
      state.push(action.payload)
    },
    removeFavouriteArtworkById: (state, action: PayloadAction<number>) => {
      return state.filter((artwork) => artwork.id !== action.payload)
    }
  }
})

export const { addFavouriteArtwork, removeFavouriteArtworkById } =
  favouriteArtworkReduxSlice.actions
export const selectFavouriteArtworks = (state: RootState) => state.favouriteArtworks
export default favouriteArtworkReduxSlice.reducer
