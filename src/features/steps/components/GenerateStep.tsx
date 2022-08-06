import type { FC } from "react"
import { useEffect } from "react"

import type { PayStub } from "@/core/domains/paystub"
import { useConditionalEffect, useThrottledState } from "@/libs/hooks"
import type { SheetsJson } from "@/libs/xlsx/xlsx.types"

import type { StepProps } from "../steps.types"

type Props = StepProps<SheetsJson, PayStub>

export const GenerateStep: FC<Props> = ({ data, onSuccess }) => {
  const [result, setResult] = useThrottledState<PayStub | null>(null)

  // TODO: implement this step
  useEffect(() => {
    console.log("GenerateStep data:", data)

    setResult({ message: "FAKE GENERATED DATA" })
  }, [data, setResult])

  useConditionalEffect(
    () => {
      onSuccess(result)
    },
    [result, onSuccess],
    [result !== null]
  )

  return (
    <div className="p-8">
      <div className="text-3xl">Generating...</div>
    </div>
  )
}
