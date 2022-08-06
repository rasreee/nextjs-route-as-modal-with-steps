import { createContext, useState } from "react"

import { useRequiredContext, useStepper } from "@/libs/hooks"
import type { ParentFC } from "@/libs/react"

import type { IStepState } from "./steps.types"
import { StepId } from "./steps.types"

export type StepsContextType = {
  state: IStepState
  nextStep: (nextStep: IStepState) => void
}

export const StepsContext = createContext<StepsContextType | undefined>(
  undefined
)

export const useStepsContext = () => useRequiredContext(StepsContext)

export const StepsProvider: ParentFC = ({ children }) => {
  const { nextStep: incrementStep } = useStepper()
  const [state, setState] = useState<IStepState>({ id: StepId.Upload })

  const nextStep = (nextState: IStepState) => {
    setState(nextState)
    incrementStep()
  }

  const value = { state, nextStep }

  return <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
}
