import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginError} from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const initialState: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    }
    expect(getLoginError(initialState as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const initialState: DeepPartial<StateSchema> = {}
    expect(getLoginError(initialState as StateSchema)).toBe(undefined)
  })
})
