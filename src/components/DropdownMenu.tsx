import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { DropdownMenuProps } from './types'

const DropdownMenu = ({
  isSearchable,
  options,
  onSelect
}: DropdownMenuProps) => {
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  )

  useEffect(() => {
    searchInputRef.current?.focus()
  }, [])

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value)

  const renderSearchBox = () => {
    return (
      <div className='dropdown-search' data-testId='dropdown-search'>
        <input
          type='text'
          role='search'
          placeholder='Search...'
          value={searchText}
          onChange={onInputChangeHandler}
          ref={searchInputRef}
        />
      </div>
    )
  }

  return (
    <div className='dropdown-menu' data-testId='dropdown-menu'>
      {isSearchable && renderSearchBox()}
      <div className='dropdown-options'>
        {filteredOptions.map((option, index) => (
          <div
            className='dropdown-option'
            key={option.value}
            data-testId={option.value}
            onClick={onSelect.bind(this, option)}
            tabIndex={filteredOptions.length - index}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropdownMenu
