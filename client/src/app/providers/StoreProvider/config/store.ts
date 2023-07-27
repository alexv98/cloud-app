import {
	configureStore,
	type CombinedState,
	type Reducer,
	type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'
import { userReducer } from 'entities/User'
import { useNavigate } from 'react-router-dom'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: ReturnType<typeof useNavigate>
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
		...asyncReducers,
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({}),
	})

	//@ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
