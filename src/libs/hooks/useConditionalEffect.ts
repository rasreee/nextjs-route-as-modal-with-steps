import type { DependencyList } from "react"
import { useEffect } from "react"

import type { IEffectCallback, IEffectHook } from "./_lib/types"
import { truthyAndArrayPredicate } from "./_lib/util"

export type IConditionsList = ReadonlyArray<any>

export type IConditionsPredicate<CL extends IConditionsList = IConditionsList> =
  (conditions: CL) => boolean

/**
 * Like `useEffect` but callback invoked only if conditions match predicate.
 *
 * @param callback Function that will be passed to underlying effect hook.
 * @param deps Dependencies list like for `useEffect`. If not undefined - effect will be
 * triggered when deps change AND conditions satisfy predicate.
 * @param conditions Conditions array.
 * @param predicate Predicate that defines whether conditions satisfying certain
 * provision. By default, it is all-truthy provision, meaning that all
 * conditions should be truthy.
 * @param effectHook Effect hook that will be used to run callback. Must comply `useEffect`
 * signature, meaning that callback should be placed as first argument and dependencies list
 * as second.
 * @param effectHookRestArgs Extra arguments that are passed to `effectHook`.
 */
export function useConditionalEffect<
  Cond extends IConditionsList,
  Callback extends IEffectCallback = IEffectCallback,
  Deps extends DependencyList | undefined = DependencyList | undefined,
  HookRestArgs extends any[] = any[],
  R extends HookRestArgs = HookRestArgs
>(
  callback: Callback,
  deps: Deps,
  conditions: Cond,
  predicate: IConditionsPredicate<Cond> = truthyAndArrayPredicate,
  effectHook: IEffectHook<Callback, Deps, HookRestArgs> = useEffect,
  ...effectHookRestArgs: R
): void {
  effectHook(
    (() => {
      if (predicate(conditions)) {
        return callback()
      }
    }) as Callback,
    deps,
    ...effectHookRestArgs
  )
}
