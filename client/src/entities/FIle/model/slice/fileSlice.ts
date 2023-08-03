import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fileFetching } from 'features/FileHandlers/model/services/fileFetching'
import { type FileSchema, type IFile } from '../types/file'

const initialState: FileSchema = {
  error: '',
  isLoading: false
}

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setCurrentDir: (state, action: PayloadAction<string>) => {
      state.currentDir = action.payload
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fileFetching.pending, state => {
        state.error = undefined
        state.isLoading = true
        state.data = []
      })
      .addCase(
        fileFetching.fulfilled,
        (state, action: PayloadAction<IFile[]>) => {
          state.isLoading = false
          state.data = action.payload
        }
      )

    // TODO: will fix type any
      .addCase(fileFetching.rejected, (state, action: any) => {
        state.error = action.payload
        state.isLoading = false
        state.data = []
      })
  }
})

export const { actions: fileActions } = fileSlice
export const { reducer: fileReducer } = fileSlice

export default fileSlice.reducer
