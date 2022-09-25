import { useRouter } from 'next/router'

import { Icon } from 'components'

import * as Styles from './styles'
import { CartButtonProps } from './types'

import { ProductPreview } from './components'
import { routePaths } from 'constants/routes'

export function CartButton (props: CartButtonProps) {
  const { count } = props

  const router = useRouter()

  const itens = [1, 2, 3]

  const renderProductItems = itens.map((value, index) => (
    <ProductPreview key={index} />
  ))
  
  return (
    <Styles.TooltipProvider>
      <Styles.TooltipRoot delayDuration={300}>
        <Styles.TooltipTrigger onClick={() => router.push(routePaths.cart.link)}>
            <Icon 
              name="shoppingBag" 
              color="primaryDark" 
              size={30}
              />
            {count && <Styles.Count>{count}</Styles.Count>}
        </Styles.TooltipTrigger>
        <Styles.TooltipContent sideOffset={5} >
          {renderProductItems}
          <Styles.TooltipArrow />
        </Styles.TooltipContent>
      </Styles.TooltipRoot>
    </Styles.TooltipProvider>
  )
}

