import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fileFetching } from 'features/Files/model/services/FileFetching/fileFetching'
import { type FileSchema, type IFile } from '../types/file'
import { createDir } from 'features/Files/model/services/CreateDir/createDir'

const initialState: FileSchema = {
  error: '',
  isLoading: false,
  data: [],
  currentDir: '',
  showModal: false
}

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setCurrentDir: (state, action: PayloadAction<string>) => {
      state.currentDir = action.payload
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
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

      .addCase(createDir.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        createDir.fulfilled,
        (state, action: PayloadAction<IFile>) => {
          state.isLoading = false
          state.data.push(action.payload)
        }
      )

      // TODO: will fix type any
      .addCase(createDir.rejected, (state, action: any) => {
        state.error = action.payload
        state.isLoading = false
      })
  }
})

export const { actions: fileActions } = fileSlice
export const { reducer: fileReducer } = fileSlice

export default fileSlice.reducer
