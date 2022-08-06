import Image from "next/image"
import type { FC } from "react"

export type LogoProps = {
  src: string
  width?: number
  height?: number
  alt?: string
  text?: string
}

export const Logo: FC<LogoProps> = ({
  src,
  width = 32,
  height = 32,
  alt = "logo",
  text,
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src={src} width={width} height={height} alt={alt} />
      {!!text && <span className="text-lg font-medium">{text}</span>}
    </div>
  )
}
