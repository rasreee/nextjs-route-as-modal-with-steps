import { useCallback, useMemo, useRef, useState } from "react"

import type { SuccessCallback } from "@/libs/abstract/types"
import { getInputFile } from "@/libs/abstract/utils"
import { useConditionalEffect } from "@/libs/hooks"
import type { InputChangeHandler, InputProps } from "@/libs/react"

import { FILE_INPUT_ID } from "./FileInput"

type UseFileInputResult = {
  file: File | null
  clearFile: () => void
  inputProps: InputProps
}

type UseFileInputOptions = {
  accept?: string[] | string
  className?: string
  name?: string
  onFile: SuccessCallback<File>
}

export const useFileInput = (
  options: UseFileInputOptions
): UseFileInputResult => {
  const {
    accept: initialAccept,
    className,
    name,
    onFile: fileCallback,
  } = options

  const fileCallbackRef = useRef(fileCallback)

  const [file, setFile] = useState<File | null>(null)

  const inputProps: InputProps = useMemo(() => {
    const accept = Array.isArray(initialAccept)
      ? initialAccept.join(", ")
      : initialAccept

    const handleChange: InputChangeHandler = (e) => {
      const selectedFile = getInputFile(e.target, 0)
      setFile(selectedFile)
    }

    return {
      id: FILE_INPUT_ID,
      name,
      accept,
      className,
      onChange: handleChange,
      type: "file",
    }
  }, [className, initialAccept, name])

  const clearFile = useCallback(() => {
    setFile(null)
  }, [])

  useConditionalEffect(
    () => {
      const { current: onFile } = fileCallbackRef

      onFile(file)
    },
    [file],
    [file !== null]
  )

  return {
    file,
    clearFile,
    inputProps,
  }
}
