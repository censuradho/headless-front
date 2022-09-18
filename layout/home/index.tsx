import { Header } from "components"
import { HomeProps } from "./types"

export function HomeLayout (props: HomeProps) {

  return (
    <div>
      <Header />
      <h1>home</h1>
    </div>
  )
}