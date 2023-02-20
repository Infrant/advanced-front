import {fireEvent, render, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation';
import {ComponentRender} from 'shared/lib/tests/ComponentRender';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    ComponentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('render Sidebar', () => {
    ComponentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
