import { styled } from "stitches.config";

export const Container = styled('div', {
  '@laptops-min': {
    marginTop: '3rem'
  }
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '@laptops-min': {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '60% 1fr',
  },

  '@desktop-min': {
    gridAutoRows: '70vh'
  }
})