import { useMemo, useState } from "react"

import { useMountEffect } from "@/libs/hooks/useMountEffect copy"
import type { ParentFC } from "@/libs/react"

import { ModalContext } from "./ModalContext"

export const ModalProvider: ParentFC = ({ children }) => {
  const [isModalOpen, setValue] = useState(false)

  const methods = useMemo(
    () => ({
      closeModal: () => setValue(true),
      openModal: () => setValue(false),
    }),
    []
  )

  useMountEffect(() => {
    console.log("\nModalProvider\n")
  })

  return (
    <ModalContext.Provider value={{ isModalOpen, ...methods }}>
      {children}
    </ModalContext.Provider>
  )
}
