import type React from "react"
import ReactDOM from "react-dom"

import { useIsMounted } from "@/libs/hooks"

interface PortalProps {
  portalElementId?: string
  children: React.ReactNode
}

const Portal = ({
  portalElementId = "portal-root",
  children,
}: PortalProps): React.ReactElement => {
  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }

  const container = document.querySelector(`#${portalElementId}`)

  if (container === null) {
    console.warn("Portal container element was null")

    return null
  }

  return ReactDOM.createPortal(children, container)
}

export default Portal
