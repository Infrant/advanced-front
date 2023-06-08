import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema';
import {validateProfileData} from '../../services/validateProfileData/validateProfileData';
import {getProfileFormData} from '../../selectors/getProfileFormData/getProfileFormData';
import {Profile, ValidateProfileError} from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, {rejectWithValue, extra, getState}) => {
    const data = getProfileFormData(getState())
    const errors = validateProfileData(data)

    if (errors.length) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<Profile>('/profile', data)

      return response.data
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  },
)
