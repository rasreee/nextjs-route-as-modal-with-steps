import type { AppProps as ExtendedAppProps } from "@/libs/next/app"
import type { NextPage as ExtendedNextPage } from "@/libs/next/page"

declare module "next" {
  export type NextPage<P = {}, IP = P> = ExtendedNextPage<P, IP>
}

declare module "next/app" {
  export declare type AppProps = ExtendedAppProps
}
