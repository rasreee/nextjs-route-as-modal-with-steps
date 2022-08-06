import isUndefined from "lodash.isundefined"
import { useMemo } from "react"

import { PaperclipIcon } from "@/components/icons/PaperclipIcon"
import type { SuccessCallback } from "@/libs/abstract/types"
import type { InputMetaData } from "@/libs/react"

import { SelectedFile } from "./SelectedFile"
import { useFileInput } from "./useFileInput"

export type FileInputProps = InputMetaData & {
  accept: string[] | string
  onFile: SuccessCallback<File>
}

export const FileInput = (props: FileInputProps) => {
  const { file, clearFile, inputProps } = useFileInput(props)

  const hintText = useMemo(() => {
    const { accept } = inputProps
    if (isUndefined(accept)) {
      return "Supports all files"
    }

    return `Supports ${accept.replace(".", "").toUpperCase()} files`
  }, [inputProps])

  return (
    <>
      <label
        htmlFor={FILE_INPUT_ID}
        className="flex w-full cursor-pointer justify-center gap-2 border-gray-200 py-10"
      >
        <PaperclipIcon className="text-hint" />
        <div className="justify center flex flex-col gap-1">
          <div className="text-primary text-lg font-semibold leading-none">
            Choose file
          </div>
          <div className="text-hint text-xs">{hintText}</div>
        </div>
        <input {...inputProps} className="hidden opacity-0" />
      </label>
      <SelectedFile file={file} onClear={clearFile} />
    </>
  )
}

export const FILE_INPUT_ID = "fileInput"
