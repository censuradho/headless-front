import { memo, useState } from 'react'
import Link from 'next/link'

import { routePaths } from 'constants/routes'

import * as Styles from './styles'
import { NavigationProps } from './types'
import { Button } from 'components/button'


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
    <Styles.Container isOpen={isOpen} onClick={toggleIsOpen}>
      <Styles.Navigation isOpen={isOpen} onClick={event => event.stopPropagation()}>
        <Styles.MyAccount>
          <Button icon={{ name: 'outlineUser' }}>Minha conta</Button>
        </Styles.MyAccount>
        <Styles.List>{renderList}</Styles.List>
        <Styles.SoftwareVersion>V1.0.0</Styles.SoftwareVersion>
      </Styles.Navigation>

    </Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)