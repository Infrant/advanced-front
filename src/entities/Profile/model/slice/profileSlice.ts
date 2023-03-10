import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {updateProfileData} from 'entities/Profile';
import {Profile, ProfileSchema} from '../types/profile';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: null,
  data: null,
  form: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.readonly = true
        state.data = action.payload
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
  },
})

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice
