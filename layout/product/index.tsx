import { Preview, ProductInfo } from './components'
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
      <Styles.Content>
        <Preview {...attributes} />
        <ProductInfo {...attributes} />
      </Styles.Content>
      
    </Styles.Container>
  )
}