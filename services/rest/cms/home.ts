import { ResponseDataType } from 'factors/types'
import { cmsApi } from '.'

import { responseFactory } from 'factors/meta'
import strapiQuery from 'lib/strapi-query'
import { Home } from 'layout/home/types'
import { homeFactory } from 'factors/home'

export async function getHome () {
  const query = strapiQuery.parse('/home', {
    populate: {
      hero: {
        populate: '*'
      },
      langeriCarousel: {
        populate: '*'
      }
    }
  })
  
  const response = await cmsApi.get<ResponseDataType<Home>>(query)

  const { data: home, ...rest } = response

  const data = responseFactory({
    meta: home.meta,
    data: homeFactory(home.data)
  })

  return {
    ...rest,
    data
  }
}