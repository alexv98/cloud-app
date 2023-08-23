import {
  configureStore,
  type CombinedState,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'
import { fileReducer } from 'entities/FIle'
import { userReducer } from 'entities/User'
import { dragDropFilesReducer } from 'features/DragDropFiles/model/slice/DragDropFilesSlice'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    file: fileReducer,
    dragDropFiles: dragDropFilesReducer,
    ...asyncReducers
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
