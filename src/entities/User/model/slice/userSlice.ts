import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/user';

const initialState: UserSchema = {
  authData: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    logout: (state) => {
      state.authData = null
    },
  },
})

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice
