import { type StateSchema } from 'app/providers/StoreProvider'

export const getDirStack = (state: StateSchema) => state.file.dirStack || []
