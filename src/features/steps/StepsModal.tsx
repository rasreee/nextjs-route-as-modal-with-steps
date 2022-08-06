import { useRouter } from "next/router"

import Modal from "@/components/modal/Modal"
import { routes } from "@/core/configs/routes"

import { Steps } from "./Steps"

export const StepsModal = ({
  returnHref = routes.home,
}: {
  returnHref?: string
}) => {
  const router = useRouter()

  const closeModal = () => {
    router.replace(returnHref)
  }

  return (
    <Modal isOpen={true} onClose={closeModal}>
      <Steps />
    </Modal>
  )
}
