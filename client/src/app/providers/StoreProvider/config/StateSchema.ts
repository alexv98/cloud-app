import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type FileSchema } from 'entities/FIle'
import { type UserSchema } from 'entities/User/model/types/user'
import { type LoginSchema, type RegSchema } from 'features/Authorization'
import { type DragDropFilesSchema } from 'features/DragDropFiles'

export interface StateSchema {
  user: UserSchema
  file: FileSchema
  dragDropFiles: DragDropFilesSchema

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
