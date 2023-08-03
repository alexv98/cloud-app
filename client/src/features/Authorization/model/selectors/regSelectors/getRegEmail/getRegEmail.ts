import { type StateSchema } from 'app/providers/StoreProvider'

export const getRegEmail = (state: StateSchema) => state?.regForm?.email || ''
