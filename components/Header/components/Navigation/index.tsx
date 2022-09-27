import { memo, useState } from 'react'
import Link from 'next/link'

import { routePaths } from 'constants/routes'

import * as Styles from './styles'
import { NavigationProps } from './types'
import { Button } from 'components/button'
import { HiddenView } from 'components/hidden-view'


function BaseNavigation (props: NavigationProps) {
  const { isOpen, toggleIsOpen } = props

  const renderList = Object.entries(routePaths).map(([, value], index) => (
    <Styles.Item key={index}>
      <Link href={value.link}>
        <a>{value.label}</a>
      </Link>
    </Styles.Item>
  ))

  return (
    <Styles.Container 
      isOpen={{
        '@laptops-max': isOpen,
        '@laptops-min': undefined
      }}
      onClick={toggleIsOpen}
    >
      <Styles.Navigation 
        isOpen={{
          '@laptops-max': isOpen,
          '@laptops-min': undefined
        }}
        onClick={event => event.stopPropagation()}
      >
        <Styles.MyAccount>
          <Button icon={{ name: 'outlineUser' }}>Minha conta</Button>
        </Styles.MyAccount>
        <Styles.List>{renderList}</Styles.List>
        <HiddenView breakpoint="laptops-min">
          <Styles.SoftwareVersion>V1.0.0</Styles.SoftwareVersion>
        </HiddenView>
      </Styles.Navigation>

    </Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)