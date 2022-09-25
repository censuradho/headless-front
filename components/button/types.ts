import { Icon } from 'components'
import { ComponentProps } from 'react'

export interface ButtonProps {
  children: string
  icon?: ComponentProps<typeof Icon>
}