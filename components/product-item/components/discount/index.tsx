import * as Styles from './styles'

import { DiscountProps } from './types'

export function Discount ({ children }: DiscountProps) {
  return (
    <Styles.Container>{children}</Styles.Container>
  )
}