import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import axios from 'axios'
import { type IFile } from 'entities/FIle'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

export const fileFetching = createAsyncThunk<
IFile[],
string,
ThunkConfig<string>
>('fileFetching', async (id, { dispatch, rejectWithValue }) => {
  try {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    const response = await axios.get<IFile[]>(
      `http://localhost:3000/api/files${id ? '?parent=' + id : ''}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
