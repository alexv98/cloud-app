import { type StateSchema } from 'app/providers/StoreProvider'

export const getRegLastname = (state: StateSchema) =>
  state?.regForm?.lastname || ''
