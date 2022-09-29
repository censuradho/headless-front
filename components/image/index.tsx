import NextImage from 'next/image'

import { ImageProps } from './types'

export function Image (props: ImageProps) {
  return (
    <NextImage {...props} placeholder="blur" blurDataURL={props?.src as string} />
  )
}