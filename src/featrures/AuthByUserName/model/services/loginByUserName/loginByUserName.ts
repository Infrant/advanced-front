import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User, userActions} from 'entities/User';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';
import {LoginSchema} from '../../../index';

export const loginByUserName = createAsyncThunk<User, Partial<LoginSchema>, {rejectValue: string}>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)
      if (!response.data) throw new Error()

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('wrong_login')
    }
  },
)
