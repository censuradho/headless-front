import { HiddenViewProps } from "./types";

import * as Styles from './styles'

export function HiddenView (props: HiddenViewProps) {
  const { max, min, children } = props

  return (
    <Styles.Container>{children}</Styles.Container>
  )
}