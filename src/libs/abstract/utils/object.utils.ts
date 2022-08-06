import type { Dict, Entries, ValueOf } from "../types"

export function objectKeys<Obj extends { [key: PropertyKey]: unknown }>(
  obj: Obj
): Array<keyof Obj> {
  return Object.keys(obj) as unknown as Array<keyof Obj>
}

export function entries<O extends Dict>(obj: O): Entries<O> {
  return Object.entries<ValueOf<O>>(obj)
}
