import { useRouter } from "next/router"

export const useReloadPage = () => {
  const { reload: reloadPage } = useRouter()

  return () => {
    reloadPage()
  }
}
