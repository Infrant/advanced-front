import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getCounterValue} from './getCounterValue';

describe('getCounterValue', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {value: 11},
    }
    expect(getCounterValue(state as StateSchema)).toEqual(11)
  })
})
