import type { CompletePrivateRouteInfo } from "next/dist/shared/lib/router/router"
import type { Router } from "next/router"

import type { NextPage as ExtendedNextPage } from "./page"

export type AppProps = Omit<CompletePrivateRouteInfo, "Component"> &
  Pick<CompletePrivateRouteInfo, "err"> & {
    router: Router
  } & Record<string, any> & {
    Component: ExtendedNextPage
  }
