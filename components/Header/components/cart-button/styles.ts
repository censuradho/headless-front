import { styled } from "stitches.config";

export const Button = styled('button', {
  width: '3.375rem',
  height: '3.375rem',
  borderRadius: '50%',
  background: '$primaryLight',
  position: 'relative'
})

export const Count = styled('div', {
  fontSize: '0.8rem',
  fontWeight: 600,
  width: '1.2rem',
  height: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: '15%',
  right: '15%',
  color: '#fff',
  background: '$primary',
  borderRadius: '50%',
  position: 'absolute'
})