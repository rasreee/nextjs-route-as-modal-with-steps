import { useRequiredContext } from "@/libs/hooks"

import type { ModalContextType } from "./ModalContext"
import { ModalContext } from "./ModalContext"

export const useModalContext = (): ModalContextType => {
  return useRequiredContext(ModalContext)
}
