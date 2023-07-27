import {
	type AnyAction,
	type CombinedState,
	type EnhancedStore,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit'
import { UserSchema } from 'entities/User/model/types/user'
import { LoginSchema } from 'features/Authorization'
import { RegSchema } from 'features/Authorization/model/types/loginSchema'

export interface StateSchema {
	user: UserSchema

	// async reducers
	loginForm?: LoginSchema
	regForm?: RegSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkConfig<T> {
	rejectValue?: T
}
