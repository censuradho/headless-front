import { Image, Box } from "components";
import { toLocaleDateString } from "lib/toLocaleDateString";

import { Product } from "types/product";

import { Discount } from './components'

import * as Styles from './styles'

export function ProductItem (props: Product) {
  const { 
    attributes: { 
      image,
      description,
      name,
      price,
      discount = 0
    } 
  } = props || {}

  const [firstImage] = image?.data || []

  const renderDiscount  = () => {
    if (!discount) return null

    const value = ((price * discount) / 100) - price

    return (
      <Styles.DiscountValue>{toLocaleDateString(value)}</Styles.DiscountValue>
    )
  }

  const renderDiscountTag = () => {
    if (!discount) return null
    return (
      <Discount>{`${discount}% OFF`}</Discount>
    )
  }

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
        {renderDiscount()}
        <Box gap={1}>
          <Styles.Price>{toLocaleDateString(price)}</Styles.Price>
          {renderDiscountTag()}
        </Box>
      </Styles.Content>
    </Styles.Container>
  )
}