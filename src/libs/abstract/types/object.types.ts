export type StructKey = string | number

export type Struct<K extends StructKey = StructKey, V = unknown> = {
  [Property in K]: V
}

export type Dict<V = any, K extends string = string> = Struct<K, V>

export type SomeDict = Dict<unknown>

export type ValueOf<O extends Dict> = O[keyof O]

export type Entry<O extends Dict> = [keyof O, ValueOf<O>]

export type Entries<O extends Dict> = Array<Entry<O>>
