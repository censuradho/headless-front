import type { Image, ImageFormat } from "types/product";
import { Product } from 'types/product'

function formatFactory (props?: ImageFormat) {

  return {
    ext: props?.ext || '',
    hash: props?.hash || '',
    height: props?.height || 0,
    mime: props?.mime || '',
    name: props?.name || '',
    path: props?.path || '',
    size: props?.size || 0,
    width: props?.width || 0,
    url: props?.url || ''
  }
}

export function imageFactory (props: Partial<Image>): Image {
  const { attributes } = props

  return {
    id: props?.id || 0,
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
        thumbnail: formatFactory(attributes?.formats?.thumbnail),
        large: formatFactory(attributes?.formats?.large),
        medium: formatFactory(attributes?.formats?.medium),
        small: formatFactory(attributes?.formats?.small),
      }
    }
  }
}

export function productFactory (props: Partial<Product>): Product {
  const { attributes, id } = props || {}

  console.log(attributes?.hoverImage)
  
  const images = attributes?.image?.data?.map(image => imageFactory(image)) || []

  return {
    id: id || 0,
    attributes: {
      createdAt: attributes?.createdAt || '',
      description: attributes?.description || '',
      name: attributes?.name || '',
      price: attributes?.price || 0,
      publishedAt: attributes?.publishedAt || '',
      updatedAt: attributes?.updatedAt || '',
      discount: attributes?.discount || 0,
      slug: attributes?.slug || '',

      image:{
        data: images
      },
      hoverImage: {
        data: imageFactory(attributes?.hoverImage?.data || {})
      },
      defaultImage: {
        data: imageFactory(attributes?.defaultImage?.data || {})
      }
    }
  }
}