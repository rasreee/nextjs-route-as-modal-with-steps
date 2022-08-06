import has from "lodash.has"
import type { FC } from "react"
import React from "react"
import invariant from "tiny-invariant"

import { StepId } from "@/features/steps"

import { DownloadStep, GenerateStep, UploadStep } from "./components"
import { useStepsContext } from "./StepsContext"

export const Steps: FC = () => {
  const { state, nextStep } = useStepsContext()

  const { id: stepId } = state

  switch (stepId) {
    case StepId.Upload: {
      return (
        <UploadStep
          onSuccess={(data) => {
            nextStep({ id: StepId.Generate, data })
          }}
        />
      )
    }
    case StepId.Generate: {
      invariant(has(state, "data"))
      return (
        <GenerateStep
          data={state.data}
          onSuccess={(data) => {
            nextStep({ id: StepId.Download, data })
          }}
        />
      )
    }
    case StepId.Download: {
      invariant(has(state, "data"))
      return (
        <DownloadStep
          data={state.data}
          onSuccess={() => {
            nextStep({ id: StepId.Upload })
          }}
        />
      )
    }
  }
}
