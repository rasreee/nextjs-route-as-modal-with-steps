import type { NextComponentType, NextPageContext } from "next"
import type { AppProps } from "next/app"

import { Meta } from "@/components/ui/Meta"
import { site } from "@/core/configs/site"
import { StepsProvider } from "@/features/steps/StepsContext"
import type { GetLayoutProps } from "@/libs/next"

import { PageLayout } from "../layout/PageLayout"

type AppBootstrapProps<PP = {}> = {
  Component: NextComponentType<NextPageContext, any, PP> & GetLayoutProps
  err?: Error
} & Omit<AppProps, "Component" | "err">

export const AppBootstrap = (props: AppBootstrapProps) => {
  const { Component, err } = props

  const injectedPageProps = {
    ...props.pageProps,
    error: err,
  }

  return (
    <>
      <Meta title={site.title} />
      <StepsProvider>
        <PageLayout>
          <Component {...injectedPageProps} />
        </PageLayout>
      </StepsProvider>
    </>
  )
}
