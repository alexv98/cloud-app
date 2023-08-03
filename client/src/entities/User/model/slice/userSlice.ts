import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { type IUser, type UserSchema } from '../types/user'

const initialState: UserSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload
      state.isAuth = true
    },
    logout: state => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      state.isAuth = false
      state.data = {} as IUser
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

export default userSlice.reducer
