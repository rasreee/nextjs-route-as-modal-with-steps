import type { MaybePromise } from "./promise.types"

export type SuccessCallback<Params extends unknown | never = never> = (
  ...params: [Params]
) => MaybePromise<void>
