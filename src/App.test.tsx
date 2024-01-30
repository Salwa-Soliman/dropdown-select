import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('should render 2 DropDownSelect', () => {
  render(<App />)
  const dropdownSelect = screen.getAllByTestId('dropdown-container')
  expect(dropdownSelect.length).toBe(2)
})
