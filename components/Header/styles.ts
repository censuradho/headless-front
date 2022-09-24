import { styled } from "stitches.config";

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
})

export const Navigation = styled('nav', {
  width: '100%',
  background: '$overlay',
  position: 'absolute',
  top: 0,
  height: '100vh',
  backdropFilter: 'blur(4px)'
})

export const TopBar = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.625rem'
})