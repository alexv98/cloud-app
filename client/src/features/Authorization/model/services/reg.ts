import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import axios from 'axios'
import { userActions } from 'entities/User'
import { type IUser } from 'entities/User/model/types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { fileActions } from 'entities/FIle'

interface registrationProps {
  name: string
  lastname: string
  email: string
  password: string
}

export const registration = createAsyncThunk<
IUser,
registrationProps,
ThunkConfig<string>
>('registration', async (regData, { dispatch, rejectWithValue }) => {
  try {
    const response = await axios.post<IUser>(
      'http://localhost:3000/api/auth/registration',
      regData
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
