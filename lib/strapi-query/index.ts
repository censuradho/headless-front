import { Options, Pagination } from './types'
import { stringify } from 'qs'


function parseQuery <T>(options: Options<T>) {
  const { fields  } = options

  const sort = options?.sort?.map(value => `${value.value}:${value.desk ? 'desk' : 'asc'}`)

  

  return stringify({
    fields,
  }, {
    encodeValuesOnly: true
  })
}

const strapiQuery = {
  parseQuery
}

export default strapiQuery