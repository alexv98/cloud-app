import { type StateSchema } from 'app/providers/StoreProvider'

export const getUserIsAuth = (state: StateSchema) => state.user?.isAuth
