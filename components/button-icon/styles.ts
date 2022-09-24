import { styled } from "stitches.config"; 

export const Button = styled('button', {
  borderRadius: '50%',
  padding: '0.3rem',

  outline: 'none',
  
  variants: {
    isRipple: {
      true: {
        background: '$foreground',
      },
      false: {
        background: 'none',

      }
    }
  }
})