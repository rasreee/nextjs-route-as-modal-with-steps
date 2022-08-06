import useLockBodyScroll from "@/libs/hooks/useLockBodyScroll"

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose?: VoidFunction
}

const Modal = ({
  children,
  isOpen,
  onClose,
}: ModalProps): React.ReactElement => {
  useLockBodyScroll(isOpen)

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="zoom-out fixed top-0 left-0 z-50 h-screen w-screen bg-black bg-opacity-75"
        onClick={onClose}
        onKeyPress={onClose}
      />
      <div className="fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded bg-white sm:w-10/12 md:w-8/12 lg:w-2/5">
        {children}
      </div>
    </>
  )
}

export default Modal
