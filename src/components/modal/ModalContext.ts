import { createContext } from "react"

export interface ModalState {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export type ModalContextType = ModalState

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
)
