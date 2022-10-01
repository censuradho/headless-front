import { useState } from 'react'

import { Image, Box } from "components";
import { paths } from "constants/routes";
import { toLocaleDateString } from "lib/toLocaleDateString";

import { Product } from "types/product";
import { resolvePath } from "utils";

import { Discount } from './components'

import * as Styles from './styles'

export function ProductItem (props: Product) {
  const { 
    id,
    attributes: { 
      image,
      description,
      name,
      price,
      discount = 0
    } 
  } = props || {}

  const [firstImage] = image?.data || []
  const [isGrab, setIsGrab] = useState(false)

  const renderDiscount  = () => {
    if (!discount) return null

    return (
      <Styles.DiscountValue>{toLocaleDateString(price)}</Styles.DiscountValue>
    )
  }

  const renderValue = () => {
    const value = discount ? price - ((discount / 100) * price) : price
    const hasDiscount = !!discount

    return <Styles.Price hasDiscount={hasDiscount}>{toLocaleDateString(value)}</Styles.Price>
  }

  const renderDiscountTag = () => {
    if (!discount) return null
    return (
      <Discount>{`${discount}% OFF`}</Discount>
    )
  }

  const href = resolvePath(paths.pdp, {
    id
  })

  return (
    <Styles.Link 
      href={href}
      isGrab={isGrab} 
      onMouseDown={() => setIsGrab(true)} 
      onMouseUp={() => setIsGrab(false)}
    >
      <a>
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
              {renderValue()}
              {renderDiscountTag()}
            </Box>
          </Styles.Content>
        </Styles.Container>
      </a>
    </Styles.Link>
  )
}