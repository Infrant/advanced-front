import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema';
import {getProfileFormData} from '../../selectors/getProfileFormData/getProfileFormData';
import {Profile} from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, {rejectWithValue, extra, getState}) => {
    try {
      const data = getProfileFormData(getState())
      const response = await extra.api.put<Profile>('/profile', data)

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
