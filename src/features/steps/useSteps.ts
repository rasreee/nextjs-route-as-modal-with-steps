import { useState } from "react"

import type { IStepState } from "@/features/steps"
import { StepId } from "@/features/steps"
import { useStepper } from "@/libs/hooks"

export const useSteps = () => {
  const { nextStep: incrementStep } = useStepper()
  const [state, setState] = useState<IStepState>({ id: StepId.Upload })

  const nextStep = (nextState: IStepState) => {
    setState(nextState)
    incrementStep()
  }

  return { state, nextStep }
}
