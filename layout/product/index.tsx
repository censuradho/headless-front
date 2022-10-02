import * as Styles from './styles'

import { ProductPageProps } from './types'

export function ProductPageLayout (props: ProductPageProps) {
  const {
    product: {
      attributes
    }
   } = props

  return (
    <Styles.Container>
      <h1>{attributes?.name}</h1>
    </Styles.Container>
  )
}