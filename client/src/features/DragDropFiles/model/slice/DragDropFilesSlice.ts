import { type DragDropAction, type DragDropFilesSchema } from '../types/DragDropFilesSchema'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: DragDropFilesSchema = {
  isDragEnter: false
}

export const DragDropFilesSlice = createSlice({
  name: 'dragDropFiles',
  initialState,
  reducers: {
    setDragEnter: (state, action: PayloadAction<DragDropAction>) => {
      action.payload.event.preventDefault()
      action.payload.event.stopPropagation()
      state.isDragEnter = action.payload.state
    }
  }
})

export const { actions: dragDropFilesActions } = DragDropFilesSlice
export const { reducer: dragDropFilesReducer } = DragDropFilesSlice
export default DragDropFilesSlice.reducer
