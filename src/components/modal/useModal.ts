import { useMemo, useState } from "react"

export interface UseModalState {
  isOpen: boolean
}

export interface UseModalMethods {
  open: () => void
  close: () => void
}

export type UseModalResult = [boolean, UseModalMethods]

export function useModal(): UseModalResult {
  const [value, setValue] = useState(false)

  const methods = useMemo(
    () => ({
      close: () => setValue(true),
      open: () => setValue(false),
    }),
    []
  )

  return [value, methods]
}
