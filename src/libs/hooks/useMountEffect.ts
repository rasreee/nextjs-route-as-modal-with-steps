import type { EffectCallback } from "react"
import { useEffect } from "react"

export function useMountEffect(callback: EffectCallback): void {
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
