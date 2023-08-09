import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import axios from 'axios'
import { type IUser, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { fileActions } from 'entities/FIle'

export const auth = createAsyncThunk<IUser, undefined, ThunkConfig<string>>(
  'auth',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      const response = await axios.get<IUser>(
        'http://localhost:3000/api/auth/auth',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (response.data.token) {
        dispatch(userActions.setAuthData(response.data))
        dispatch(fileActions.setCurrentDir({ id: response.data.id }))
        localStorage.setItem(
          USER_LOCALSTORAGE_KEY,
          JSON.stringify(response.data.token)
        )
      }
      return response.data
    } catch (e) {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      return rejectWithValue('error')
    }
  }
)
