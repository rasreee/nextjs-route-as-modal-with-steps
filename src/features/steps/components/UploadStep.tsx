import type { AxiosResponse } from "axios"
import type { FC } from "react"
import React, { useCallback } from "react"

import { ErrorMessage } from "@/components/ui/ErrorMessage"
import { FILE_INPUT_ID, FileInput } from "@/components/ui/FileInput"
import { endpoints } from "@/core/configs/api"
import { apiRequest } from "@/core/services/api"
import { isSuccessState } from "@/libs/abstract/utils"
import { useAsync, useConditionalEffect } from "@/libs/hooks"
import type { SheetsJson } from "@/libs/xlsx"

import type { StepProps } from "../steps.types"

type Props = StepProps<never, SheetsJson>

export const UploadStep: FC<Props> = ({ onSuccess }) => {
  const [requestState, methods] = useAsync()

  const handleUploadProgress = (progressEvent) => {
    console.log("handleUploadProgress", progressEvent)
  }

  const handleFile = useCallback(
    (file: File) => {
      const promise = sendUploadRequest({
        file,
        onUploadProgress: handleUploadProgress,
      })
      methods.resolve(promise)
    },
    [methods]
  )

  useConditionalEffect(
    () => {
      onSuccess(requestState.data)
    },
    [requestState],
    [isSuccessState(requestState)]
  )

  return (
    <form className="flex flex-col gap-3">
      <FileInput
        {...{
          className: FILE_INPUT_ID,
          accept: ALLOWED_FILES,
          name: UPLOAD_INPUT_ID,
          onFile: handleFile,
        }}
      />
      <div className="mt-5 flex items-center justify-end">
        <ErrorMessage error={requestState.error} />
      </div>
    </form>
  )
}

const ALLOWED_FILES = [".csv", ".xls", ".xlsx"]

const UPLOAD_INPUT_ID = "timesheet"

async function sendUploadRequest({
  file,
  onUploadProgress: handleUploadProgress,
}: {
  file: File
  onUploadProgress: (progressEvent: any) => void
}): Promise<SheetsJson> {
  const formData = new FormData()
  formData.append("file", file)

  const { data } = await apiRequest.post<FormData, AxiosResponse<SheetsJson>>(
    endpoints.upload,
    formData,
    {
      onUploadProgress: handleUploadProgress,
    }
  )

  const uploadedFile = data?.file || null
  if (uploadedFile === null) {
    console.warn("No file returned from server", data)
    throw new Error("No file was returned from server")
  }

  return data
}
