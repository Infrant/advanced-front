import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginIsLoading} from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('should return true', () => {
    const initialState: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(initialState as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const initialState: DeepPartial<StateSchema> = {}
    expect(getLoginIsLoading(initialState as StateSchema)).toBe(false)
  })
})
