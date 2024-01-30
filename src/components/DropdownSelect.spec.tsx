import { fireEvent, render, screen } from '@testing-library/react'
import DropdownSelect from './DropdownSelect'
import { DropdownSelectProps } from './types'

const dropdownSelectProps: DropdownSelectProps = {
  options: [
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' }
  ],
  placeholder: 'Please Select...',
  isSearchable: true
}
describe('DropdownSelect component', () => {
  it('should receive correct props', () => {
    render(<DropdownSelect {...dropdownSelectProps} />)
    const placeholderText = screen.getByText(/please select.../i)

    expect(placeholderText).toBeInTheDocument()
  })

  it('should pass correct props to DropDownMenu', () => {
    render(<DropdownSelect {...dropdownSelectProps} />)
    const placeholder = screen.getByTestId('dropdown-placeholder')

    fireEvent(placeholder, new MouseEvent('click', { bubbles: true }))

    const options = document.querySelectorAll('.dropdown-option')

    expect(options.length).toEqual(2)

    expect(screen.getByTestId('html')).toBeInTheDocument()

    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
