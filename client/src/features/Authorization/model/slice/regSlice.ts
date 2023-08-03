import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { registration } from '../services/reg'
import { type RegSchema } from '../types/loginSchema'

const initialState: RegSchema = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  isLoading: false,
  error: ''
}

export const regSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },

  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isLoading = false
      })

    // TODO: will fix type any
      .addCase(registration.rejected, (state, action: any) => {
        state.error = action.payload
        state.isLoading = false
      })
  }
})

export const { actions: regActions } = regSlice
export const { reducer: regReducer } = regSlice
