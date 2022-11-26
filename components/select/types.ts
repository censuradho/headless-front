export interface SelectData {
  label: string
  value: string | number
}

export interface SelectProps {
  data: SelectData[]
  placeholder?: string,
  fullWidth?: boolean
}
