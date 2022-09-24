import { Product } from 'types/product'
import { ResponseDataType } from 'factors/types'
import { cmsApi } from '.'

import { responseFactory } from 'factors/meta'

export async function getHome () {
  const response = await cmsApi.get<ResponseDataType<any>>('/home?populate[langeriCarousel][populate]=*')

  const { data: product, ...rest } = response

  const data = responseFactory(product)

  return {
    ...rest,
    data
  }
}