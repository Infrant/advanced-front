import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginPassword} from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const initialState: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    }
    expect(getLoginPassword(initialState as StateSchema)).toBe('123')
  })

  test('should work with empty state', () => {
    const initialState: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(initialState as StateSchema)).toBe('')
  })
})
