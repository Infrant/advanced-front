import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginUserName} from './getLoginUserName';

describe('getLoginUserName.test', () => {
  test('should return password', () => {
    const initialState: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'John Doe',
      },
    }
    expect(getLoginUserName(initialState as StateSchema)).toBe('John Doe')
  })

  test('should work with empty state', () => {
    const initialState: DeepPartial<StateSchema> = {}
    expect(getLoginUserName(initialState as StateSchema)).toBe('')
  })
})
