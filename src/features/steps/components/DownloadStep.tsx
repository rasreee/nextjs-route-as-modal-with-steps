import type { FC } from "react"

import type { PayStub } from "@/core/domains/paystub"

import type { StepProps } from "../steps.types"

type Props = StepProps<PayStub>

export const DownloadStep: FC<Props> = ({ data }) => {
  // TODO: implement
  const handleDownload = () => {
    console.log("handleDownload")
  }

  return (
    <div className="p-8">
      <div className="text-3xl">DownloadStep</div>
      {JSON.stringify(data)}
      <button className="primary-button" onClick={handleDownload}>
        Download
      </button>
    </div>
  )
}
