import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import axios from 'axios'
import { userActions } from 'entities/User/model/slice/userSlice'
import { type IUser } from 'entities/User/model/types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { fileActions } from 'entities/FIle'

interface LoginByUsernameProps {
  email: string
  password: string
}

export const login = createAsyncThunk<
IUser,
LoginByUsernameProps,
ThunkConfig<string>
>('login', async (authData, { dispatch, rejectWithValue }) => {
  try {
    const response = await axios.post<IUser>(
      'http://localhost:3000/api/auth/login',
      authData
    )
    if (!response.data) {
      throw new Error()
    }
    dispatch(userActions.setAuthData(response.data))
    dispatch(fileActions.setCurrentDir({ id: response.data.id }))
    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data.token)
    )

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
