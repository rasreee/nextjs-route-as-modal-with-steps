import NextHead from "next/head"
import type { FC } from "react"

export type MetaProps = {
  title?: string
}

export const Meta: FC<MetaProps> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </NextHead>
  )
}
