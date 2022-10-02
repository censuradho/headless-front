import { Box, DiscountOff, Typography } from 'components'
import { toLocaleDateString } from 'lib/toLocaleDateString'
import { getPercentValue } from 'utils'
import * as Styles from './styles'

import { ProductInfo } from './types'

export function ProductInfo (props: ProductInfo) {
  const {
    discount,
    parcelamento,
    price
   } = props

  const renderValue = () => {
    if (!discount) return null

    const value = discount ? getPercentValue(discount, price)  : price

    return (
      <Box alignItems="center" gap={1}>
        <DiscountOff>{discount} OFF</DiscountOff>
        <Typography variant="caption1-regular" lineThrough>{toLocaleDateString(value)}</Typography>
      </Box>
    )
  }

  const renderParcelamento = () => {
    if (!parcelamento) return null

    const value = toLocaleDateString(price / parcelamento)

    return (
      <Typography variant="footnote">
          Em até 3x  <Typography variant="footnote" semiBold></Typography>{value} <Typography uppercase>sem juros</Typography>
      </Typography>
    )
  }

  return (
    <Styles.Container>
      <Typography 
        variant={{
          "@initial": 'footnote',
          '@laptops-min': 'sub-headline'
        }}
      >{props?.name}</Typography>

      <Box flexDirection="column" gap={0.5}>
        {renderValue()}
        <Box flexDirection="column" gap={1}>
          <Box alignItems="flex-end" gap={0.3}>
            <Typography variant="title2" semiBold>{toLocaleDateString(price)}</Typography>
            <Typography variant="caption2">à vista</Typography>
          </Box>
        {renderParcelamento()}
        </Box>
      </Box>
    </Styles.Container>
  )
}