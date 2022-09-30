import { Image } from "components";
import { toLocaleDateString } from "lib/toLocaleDateString";

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
      <Styles.Thumb>
          <Image 
            src={firstImage?.attributes?.url} 
            alt={firstImage?.attributes?.alternativeText} 
            height={firstImage?.attributes?.height}
            width={firstImage?.attributes?.width}
            layout="fill"
            objectFit="contain"
          />
        </Styles.Thumb>
      <Styles.Content>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Price>{toLocaleDateString(price)}</Styles.Price>
      </Styles.Content>
    </Styles.Container>
  )
}