import { type StateSchema } from 'app/providers/StoreProvider'

export const getIsDragEnter = (state: StateSchema) => state.dragDropFiles.isDragEnter
