import {classNames} from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('className')).toBe('className')
  })

  test('with additional params', () => {
    expect(classNames(
      'className',
      {},
      ['additional', 'additional2'],
    )).toBe('className additional additional2')
  })

  test('with mods', () => {
    expect(classNames(
      'className',
      {
        hovered: true,
        collapsed: false,
        active: true,
      },
      [],
    )).toBe('className hovered active')
  })

  test('with all params', () => {
    expect(classNames(
      'className',
      {
        hovered: true,
        collapsed: false,
        active: true,
      },
      ['additional', 'additional2'],
    )).toBe('className additional additional2 hovered active')
  })

  test('with mods undefined', () => {
    expect(classNames(
      'className',
      {
        hovered: undefined,
        collapsed: false,
        active: true,
      },
      ['additional', 'additional2'],
    )).toBe('className additional additional2 active')
  })
})
