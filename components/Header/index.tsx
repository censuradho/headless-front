import { useState } from 'react'

import dynamic from 'next/dynamic'

import * as Styles from './styles'

import { ButtonIcon } from 'components'

import { Navigation } from './components'
import { useBooleanToggle } from 'hooks'

const Logo = dynamic(() => import('public/icons/logo.svg'))

export function Header () {
  const [isOpen, toggleIsOpen] = useBooleanToggle()


  return (
    <Styles.Container>
      <Styles.TopBar>
      <ButtonIcon 
          onClick={toggleIsOpen} 
          icon={{ 
            name: 'menu',
            size: 30
          }}
        />
        <Logo />
      </Styles.TopBar>
      <Navigation isOpen={isOpen} toggleIsOpen={toggleIsOpen} />        
    </Styles.Container>
  )
}