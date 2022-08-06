import type { ComponentType, PropsWithChildren, ReactElement } from "react"

import type { Children } from "./children"

export type ParentProps<TChildren extends Children = Children> =
  PropsWithChildren<{
    children: TChildren | undefined
  }>

export type Parent<
  Props = {},
  TChildren extends Children = Children
> = ComponentType<Props & ParentProps<TChildren>>

export type IParentFC<Props = {}> = (props: ParentProps & Props) => ReactElement

export type ParentFC<Props = {}> = IParentFC<Props>
