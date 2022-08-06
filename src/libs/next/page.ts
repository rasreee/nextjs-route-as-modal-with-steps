import type { NextPageContext } from "next"
import type { ComponentType } from "react"

import type { GetLayoutProps } from "./layout"

export interface NextPageProps {}

export type NextPage<P = {}, IP = P> = ComponentType<NextPageProps & P> & {
  getInitialProps?: (context: NextPageContext) => IP | Promise<IP>
} & GetLayoutProps
