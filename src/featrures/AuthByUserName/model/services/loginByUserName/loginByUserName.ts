import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from 'entities/User';
import {USER_LOCAL_STORAGE_KEY} from 'shared/const/localStorage';
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema';
import {LoginSchema} from '../../../index';

export const loginByUserName = createAsyncThunk<User, Partial<LoginSchema>, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, {dispatch, rejectWithValue, extra}) => {
    try {
      const response = await extra.api.post<User>('/login', authData)
      if (!response.data) throw new Error()

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      return rejectWithValue('wrong_login')
    }
  },
)
