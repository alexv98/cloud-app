import { type StateSchema } from 'app/providers/StoreProvider'

export const getRegName = (state: StateSchema) => state?.regForm?.name || ''
