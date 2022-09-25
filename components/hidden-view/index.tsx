import { HiddenViewProps } from "./types";

import * as Styles from './styles'

export function HiddenView (props: HiddenViewProps) {
  const { breakpoint, children } = props

  const _breakpoint = `@${breakpoint}`

  return (
    <Styles.Container
      hidden={{
        [_breakpoint]: 'true'
      }}
    >
      {children}
    </Styles.Container>
  )
}