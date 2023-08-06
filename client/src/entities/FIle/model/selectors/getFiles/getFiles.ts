import { type StateSchema } from 'app/providers/StoreProvider'

export const getFiles = (state: StateSchema) => state.file.data || []
