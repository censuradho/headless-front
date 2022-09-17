import type { Image } from "types/product";
import type { ProductProp } from './types'
import { Product } from 'types/product'
import { metaFactory } from "factors/meta";


function imageFactory (props: Partial<Image>): Image {
  const { attributes } = props

  return {
    id: props.id || 0,
    attributes: {
      alternativeText: attributes?.alternativeText || '',
      caption: attributes?.caption || '',
      createdAt: attributes?.createdAt || '',
      ext: attributes?.ext || '',
      hash: attributes?.hash || '',
      height: attributes?.height || 0,
      mime: attributes?.mime || '',
      name: attributes?.name || '',
      size: attributes?.size || 0,
      updatedAt: attributes?.updatedAt || '',
      width: attributes?.width || 0,
      previewUrl: attributes?.previewUrl || '',
      url: attributes?.url || '',
      provider: attributes?.provider || '',
      formats: {
        thumbnail: {
          ext: attributes?.formats?.thumbnail?.ext || '',
          hash: attributes?.formats?.thumbnail?.hash || '',
          height: attributes?.formats?.thumbnail?.height || 0,
          mime: attributes?.formats?.thumbnail?.mime || '',
          name: attributes?.formats?.thumbnail?.name || '',
          path: attributes?.formats?.thumbnail?.path || '',
          size: attributes?.formats?.thumbnail?.size || 0,
          width: attributes?.formats?.thumbnail?.width || 0,
        }
      }
    }
  }
}

export function productFactory (props: Partial<Product>): Product {
  const { attributes, id } = props

  const images = attributes?.image?.data.map(image => imageFactory(image)) || []

  return {
    id: id || 0,
    attributes: {
      createdAt: attributes?.createdAt || '',
      description: attributes?.description || '',
      name: attributes?.name || '',
      price: attributes?.price || 0,
      publishedAt: attributes?.publishedAt || '',
      updatedAt: attributes?.updatedAt || '',
      image:{
        data: images
      }
    }
  }
}