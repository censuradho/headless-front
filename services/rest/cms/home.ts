import { ResponseDataType } from 'factors/types'
import { cmsApi } from '.'

import { responseFactory } from 'factors/meta'
import strapiQuery from 'lib/strapi-query'
import { Home } from 'layout/home/types'

export async function getHome () {
  const query = strapiQuery.parse('/home', {
    populate: {
      langeriCarousel: {
        populate: '*'
      }
    }
  })
  
  const response = await cmsApi.get<ResponseDataType<Home>>(query)

  const { data: product, ...rest } = response

  const data = responseFactory(product)

  return {
    ...rest,
    data
  }
}