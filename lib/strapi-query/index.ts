import { Options } from './types'
import { stringify } from 'qs'


function parse <T>(path: string, options?: Options<T>) {
  const { fields, pagination, populate  } = options || {}

  const sort = options?.sort?.map(value => `${value.value}:${value.desk ? 'desk' : 'asc'}`)

  const query = {
    ...({ fields } || []),
    ...(({ sort }) || []),
    ...(({ pagination }) || {}),
    ...(({ populate }) || {}),
  }

  return `${path}?${stringify(query, { encodeValuesOnly: true })}`
}

const strapiQuery = {
  parse
}

export default strapiQuery