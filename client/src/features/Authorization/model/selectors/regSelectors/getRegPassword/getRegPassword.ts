import { StateSchema } from 'app/providers/StoreProvider'

export const getRegPassword = (state: StateSchema) =>
	state?.regForm?.password || ''
