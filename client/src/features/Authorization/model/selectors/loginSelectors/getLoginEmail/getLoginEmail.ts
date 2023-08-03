import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginEmail = (state: StateSchema) =>
  state?.loginForm?.email || ''
