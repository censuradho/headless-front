import { styled } from "stitches.config";

export const Container = styled('div', {
  width: '100%',
  position: 'relative',
})

export const Name = styled('h3', {
  fontSize: '$footnote',
  fontWeight: 600,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  overflow: 'hidden',
  textTransform: 'uppercase',
})

export const Content = styled('div', {
  marginTop: '2.125rem',
  display: 'flex',
  gap: '0.8125rem',
  flexDirection: 'column'
})

export const Thumb = styled('figure', {
  height: '20rem',
  width: '100%',
  position: 'relative'
})

export const Price = styled('span', {
  fontSize: '$title2',
  

  variants: {
    hasDiscount: {
      true: {
        color: '$green'
      }
    }
  }
})

export const DiscountValue = styled('span', {
  fontSize: '0.8rem',
  color: '$body',
  textDecoration: 'line-through'
})