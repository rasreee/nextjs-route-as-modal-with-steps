import type { ReactElement } from "react"

export interface LayoutFunction {
  (page: any): ReactElement
}

export interface GetLayoutProps {
  getLayout?: LayoutFunction
}
