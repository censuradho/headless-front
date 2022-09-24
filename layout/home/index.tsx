import { Header, Icon } from "components"
import strapiQuery from "lib/strapi-query"
import { HomeProps } from "./types"

export function HomeLayout () {

 console.log(

  strapiQuery.parseQuery<{ name?: { age?: number } }>({
    fields: ['name', 'name.age'],

  })


 )
  return (
    <div>
      <Header />
      <h1>home</h1>
    </div>
  )
}