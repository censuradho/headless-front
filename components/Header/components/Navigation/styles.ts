import { styled, keyframes } from "stitches.config";

const openNavigation = keyframes({
  '0%': {
    transform: 'translate(-100%)',
  },
  '100%': {
    transform: 'translate(0%)',
  }
})

const closeNavigation = keyframes({
  '0%': {
    transform: 'translate(0%)',
  },
  '100%': {
    transform: 'translate(-100%)',
  }
})

const openOverlay = keyframes({
  '0%': {
    visibility: 'hidden',
    opacity: 0,
  },
  '100%': {
    visibility: 'visible',
    opacity: 1,
  }
})

const closeOverlay = keyframes({
  '0%': {
    visibility: 'visible',
  },
  '100%': {
    visibility: 'hidden',
  }
})


export const Container = styled('div', {
  width: '100%',
  background: '$overlay',
  position: 'absolute',
  top: 0,
  height: '100vh',
  backdropFilter: 'blur(4px)',
  variants: {
    isOpen: {
      true: {
        animation: `${openOverlay} 0.1s ease forwards`,
      },
      false: {
        animation: `${closeOverlay} 0.1s ease forwards`,
      },
    }
  }
})

export const Navigation = styled('nav', {
  width: '80%',
  background: '$background',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  variants: {
    isOpen: {
      true: {
        animation: `${openNavigation} 0.25s ease`,
        animationFillMode: 'forwards',

      },
      false: {
        animation: `${closeNavigation} 0.25s ease`,
        animationFillMode: 'forwards',
      }
    }
  },
  defaultVariants: {
    isOpen: 'false'
  }
})

export const Item = styled('li', {
  borderBottom: '1px solid $highlight',
  a: {
    fontSize: '1rem',
    display: 'inline-block',
    padding: '0.625rem'
  }
})

export const List = styled('ul', {
  width: '100%',
  flex: 1,
  overflow: 'auto',
  [`${Item}:first-child`]: {
    borderTop: '1px solid $highlight',
  }
})

