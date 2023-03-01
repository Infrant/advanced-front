import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from '../types/loginSchema';
import {loginByUserName} from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state, action) => {
        state.error = ''
        state.isLoading = true
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
  },
})

export const {
  actions: loginActions,
  reducer: loginReducer,
} = loginSlice
