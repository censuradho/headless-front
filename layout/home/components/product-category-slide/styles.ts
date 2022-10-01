import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  paddingLeft: '1rem',
  margin: '2rem 0',

  '.keen-slider': {
    width: '100%',
  },

  '@table-min': {
    paddingLeft: '2rem',
  },
})


export const Header = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  paddingRight: '1rem',
  background: '$background',
  zIndex: 999,

  '@table-min': {
    paddingRight: '2rem',
  },

  marginBottom: '3.125rem'
})

export const Title = styled('h2', {
  fontSize: '$title2',
  textTransform: 'uppercase'
})

export const Hr = styled('hr', {
  width: '100%',
  height: '1px',
  background: '$highlight',
  border: 'none',
})

export const DraggableView = styled('div', {
  variants: {
    isGrab: {
      false: {
        cursor: 'pointer',
      },
      true: {
        cursor: 'grabbing'
      }
    }
  }
})