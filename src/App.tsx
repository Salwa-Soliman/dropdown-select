import React from 'react'
import logo from './logo.svg'
import './App.css'
import DropdownSelect from './components/DropdownSelect'
import { Option } from './components/types'

function App () {
  const options: Option[] = [
    { label: 'HTML', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'JavaScript', value: 'js' }
  ]

  return (
    <div className='App'>
      <DropdownSelect options={options} isSearchable />
      <DropdownSelect options={options} style={{ color: 'red' }} />
    </div>
  )
}

export default App
