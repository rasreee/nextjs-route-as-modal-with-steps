export type PartialSetStateAction<T> = Partial<T> | ((changes: T) => Partial<T>)
