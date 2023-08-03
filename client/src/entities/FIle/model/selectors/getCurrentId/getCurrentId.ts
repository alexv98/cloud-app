import { type StateSchema } from 'app/providers/StoreProvider'

export const getCurrentId = (state: StateSchema) => state.file.currentDir || ''
