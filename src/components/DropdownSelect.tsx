import { useState, useEffect, useRef } from 'react'
import { DropdownSelectProps, Option } from './types'
import './DropdownSelect.css'
import DropdownMenu from './DropdownMenu'

const DropdownSelect = ({
  options,
  placeholder,
  style,
  dropdownArrow,
  isSearchable
}: DropdownSelectProps) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option>()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clickOutsideHandler = (e: globalThis.MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdownMenu(false)
      }
    }
    document.addEventListener('click', clickOutsideHandler)
    return () => {
      document.removeEventListener('click', clickOutsideHandler)
    }
  }, [])

  const renderDropdownArrow = () => {
    return (
      dropdownArrow ?? (
        <svg height='20' width='20' viewBox='0 0 20 20'>
          <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
        </svg>
      )
    )
  }

  const showDropdownHandler = () => setShowDropdownMenu(!showDropdownMenu)

  const selectOptionHandler = (option: Option) => setSelectedOption(option)

  return (
    <div className={'dropdown-container'} data-testId='dropdown-container'>
      <div
        className='dropdown-placeholder'
        style={style}
        onClick={showDropdownHandler}
        ref={dropdownRef}
        data-testId='dropdown-placeholder'
      >
        <span className='dropdown-placeholder-text'>
          {selectedOption?.label ?? placeholder}
        </span>
        {renderDropdownArrow()}
      </div>

      {showDropdownMenu && (
        <DropdownMenu
          options={options}
          isSearchable={isSearchable}
          onSelect={selectOptionHandler}
        />
      )}
    </div>
  )
}

export default DropdownSelect

DropdownSelect.defaultProps = {
  placeholder: 'Select...',
  style: {},
  isSearchable: false
}
