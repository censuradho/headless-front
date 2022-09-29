import { Image } from "components";

import { Product } from "types/product";

import * as Styles from './styles'

export function ProductItem (props: Product) {
  const { 
    attributes: { 
      image,
      description,
      name,
      price
    } 
  } = props || {}

  const [firstImage] = image?.data || []


  return (
    <Styles.Container>
      <Image 
        src={firstImage?.attributes?.url} 
        alt={firstImage?.attributes?.alternativeText} 
        height={firstImage?.attributes?.height}
        width={firstImage?.attributes?.width}
        layout="responsive"
      />
      <Styles.Content>
        <Styles.Name>{name}</Styles.Name>
      </Styles.Content>
    </Styles.Container>
  )
}