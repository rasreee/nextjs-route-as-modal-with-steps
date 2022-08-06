import type { InputHTMLAttributes } from "react"

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export type InputMetaData = Pick<InputProps, "className" | "name">
