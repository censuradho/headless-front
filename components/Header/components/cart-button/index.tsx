import { Icon } from 'components'
import * as Styles from './styles'
import { CartButtonProps } from './types'

export function CartButton (props: CartButtonProps) {
  const { count } = props

  return (
    <Styles.Button>
      <Icon 
        name="shoppingBag" 
        color="primaryDark" 
        size={30}
      />
      {count && <Styles.Count>{count}</Styles.Count>}
    </Styles.Button>
  )
}

