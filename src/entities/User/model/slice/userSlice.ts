import {createSlice} from '@reduxjs/toolkit'
import {UserSchema} from '../types/user';

const initialState: UserSchema = {
  authData: null,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
})

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice
