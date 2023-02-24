import {screen} from '@testing-library/react';
import {ComponentRender} from 'shared/lib/tests/ComponentRender';
import userEvent from '@testing-library/user-event';
import {Counter} from './Counter'

describe('Counter', () => {
  test('should have value 10', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('should increment value', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })
    const incrementBtn = screen.getByTestId('increment-btn')
    userEvent.click(incrementBtn)
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('should decrement value', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    })
    const incrementBtn = screen.getByTestId('decrement-btn')
    userEvent.click(incrementBtn)
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
