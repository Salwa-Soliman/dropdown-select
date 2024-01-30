import { render, screen } from '@testing-library/react'
import DropdownMenu from './DropdownMenu'
import { DropdownMenuProps } from './types'

const dropdownMenuProps: DropdownMenuProps = {
  options: [
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' }
  ],
  isSearchable: true,
  onSelect: jest.fn()
}

describe('DropdownMenu Component', () => {
  it('should render successfully', () => {
    render(<DropdownMenu {...dropdownMenuProps} />)
    expect(screen.getByTestId('dropdown-menu')).toBeInTheDocument()
  })
})
