import { styled } from "stitches.config";

export const Container = styled('div', {
  variants: {
    hidden: {
      true: {
        display: 'none'
      }
    }
  }
})