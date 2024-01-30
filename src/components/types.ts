import { CSSProperties } from 'react'

export type DropdownSelectProps = {
  options: Option[]
  style?: CSSProperties
  placeholder?: string
  dropdownArrow?: JSX.Element
  isSearchable?: boolean
}

export type DropdownMenuProps = {
  isSearchable?: boolean
  options: Option[]
  onSelect(option: Option): void
}

export type Option = {
  label: string
  value: string
}
