import { StoreProvider } from './ui/storeProvider'
import { createReduxStore, type AppDispatch } from './config/store'
import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig
} from './config/StateSchema'

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type AppDispatch,
  type ThunkConfig
}
