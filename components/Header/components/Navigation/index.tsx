import { memo, useState } from 'react'
import Link from 'next/link'

import { routePaths } from 'constants/routes'

import * as Styles from './styles'
import { NavigationProps } from './types'


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
      <Styles.Navigation isOpen={isOpen}>
        <Styles.List>{renderList}</Styles.List>
      </Styles.Navigation>
    </Styles.Container>
  )
}

export const Navigation = memo(BaseNavigation)