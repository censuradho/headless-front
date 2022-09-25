import { styled } from "stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0.625rem 0.8125rem',
  borderBottom: '1px solid $highlight'
})

export const Title = styled('strong', {
  fontSize: '$subHeadline',
})

export const Price = styled('span', {
  fontSize: '$callout',
  color: '$body'
})

export const ImagePreviewContainer = styled('div', {
  width: '3.375rem',
  height: '4.5',
  position: 'relative'
})