import dynamic from 'next/dynamic'

import * as Styles from './styles'

import { Button, Box, HiddenView } from 'components'

import { CartButton, Navigation } from './components'
import { useBooleanToggle } from 'hooks'
import Link from 'next/link'
import { routePaths } from 'constants/routes'

const Logo = dynamic(() => import('public/icons/logo.svg'))

export function Header () {
  const [isOpen, toggleIsOpen] = useBooleanToggle()


  return (
    <Styles.Container>
      <Styles.TopBar>
      <Styles.ButtonIcon 
          onClick={toggleIsOpen} 
          icon={{ 
            name: 'menu',
            size: 30
          }}
        />
        <Link href={routePaths.home.link}>
          <a>
            <Logo />
          </a>
        </Link>
        <HiddenView breakpoint="laptops-min">
          <CartButton count={5} />
        </HiddenView>
        <HiddenView breakpoint="laptops-max">
          <Box
            alignItems="center"
            gap={2.375}
          >
              <Button icon={{ name: 'outlineUser'}}>Minha conta</Button>
              <CartButton count={5} />
          </Box>
        </HiddenView>
      </Styles.TopBar>
      <Navigation isOpen={isOpen} toggleIsOpen={toggleIsOpen} />        
    </Styles.Container>
  )
}