import type { FC } from "react"

import type { LogoProps } from "@/components/ui/Logo"
import { Logo } from "@/components/ui/Logo"
import type { MetaProps } from "@/components/ui/Meta"
import { Meta } from "@/components/ui/Meta"
import { site } from "@/core/configs/site"
import type { ParentProps } from "@/libs/react"

type PageLayoutProps = {
  activePath?: string
  metaProps?: MetaProps
}

export const PageLayout: FC<PageLayoutProps & Partial<ParentProps>> = ({
  children,
  metaProps: customMetaProps = {},
}) => {
  return (
    <>
      <Meta {...{ ...defaultMetaProps, ...customMetaProps }} />
      <main className="relative h-screen min-h-screen w-screen">
        <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gray-50">
          <PageHeader logoProps={logoProps} />
          <div className="page-section flex-1">{children}</div>
        </div>
      </main>
    </>
  )
}

const logoProps = { src: "/logo_32.png" }
const defaultMetaProps = { title: site.title }

type PageHeaderProps = { logoProps: LogoProps }

const PageHeader: FC<PageHeaderProps> = ({ logoProps }) => {
  return (
    <header className="page-section min-h-16 flex items-center justify-between">
      <Logo {...logoProps} />
    </header>
  )
}
