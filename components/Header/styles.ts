import { styled } from "stitches.config";
import { ButtonIcon as CommonButtonIcon } from 'components'

export const Container = styled('header', {
  width: '100%',
  height: '5rem',
  background: '$background',
  border: '1px solid $foreground',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'sticky',
  top: 0,

  '@laptops-min': {
    flexDirection: 'column',
    height: 'auto',
    padding:  '2.25rem 3rem'
  }
})


export const ButtonIcon = styled(CommonButtonIcon, {
  '@laptops-min': {
    display: 'none'
  }
})

export const TopBar = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.625rem',
})
