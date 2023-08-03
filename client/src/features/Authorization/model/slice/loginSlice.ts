import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { login } from '../services/login'
import { type LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  email: '',
  password: '',
  isLoading: false,
  error: ''
}

export const loginSLice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },

  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
      })

    // TODO: will fix type any
      .addCase(login.rejected, (state, action: any) => {
        state.error = action.payload
        state.isLoading = false
      })
  }
})

export const { actions: loginActions } = loginSLice
export const { reducer: loginReducer } = loginSLice
