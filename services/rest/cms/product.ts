import { Product } from 'types/product'
import { ResponseDataType } from 'factors/types'
import { cmsApi } from '.'

import { responseFactory } from 'factors/meta'

export async function getProduct () {
  const response = await cmsApi.get<ResponseDataType<Product[]>>('/products?fields=*&populate=*')

  const { data: product, ...rest } = response

  const data = responseFactory(product)

  return {
    ...rest,
    data
  }
}