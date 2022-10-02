import { styled } from "stitches.config";

export const Container = styled('div', {
  position: 'relative',
})

export const DotContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  position: 'absolute',
  bottom: '1.5rem'
})

export const Dot = styled('button', {
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  variants: {
    active: {
      true: {
        backgroundColor: '$primary'
      },
      false: {
        backgroundColor: '$primaryLight'
      }
    }
  }
})