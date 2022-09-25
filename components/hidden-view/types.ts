import { ReactNode } from 'react'

import { breakpointNames } from "constants/breakpoints"

const hiddenMax = [
  breakpointNames.desktopMax,
  breakpointNames.smartPhoneMax,
  breakpointNames.laptopsMax,
  breakpointNames.tableMax,
  breakpointNames.tvMax,
] as const

const hiddenMin = [
  breakpointNames.desktopMin,
  breakpointNames.smartPhoneMin,
  breakpointNames.laptopsMin,
  breakpointNames.tableMin,
  breakpointNames.tvMin,
] as const

export interface HiddenViewProps {
  max?: typeof hiddenMax[number],
  min?: typeof hiddenMin[number],
  children?: ReactNode
}