import type { DependencyList } from "react"

export type Predicate = (prev: any, next: any) => boolean

export type IEffectCallback = (...args: any[]) => any

export type IEffectHook<
  Callback extends IEffectCallback = IEffectCallback,
  Deps extends DependencyList | undefined = DependencyList | undefined,
  RestArgs extends any[] = any[]
> =
  | ((...args: [Callback, Deps, ...RestArgs]) => void)
  | ((...args: [Callback, Deps]) => void)
